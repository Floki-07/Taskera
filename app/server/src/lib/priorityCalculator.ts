export interface TimeSlot {
  start: Date;
  end: Date;
  duration: number;
}

export interface TaskPriorityInput {
  title: string;
  type: "ASG" | "EXAM" | "READING" | "PRACTICE" | "OTHER";
  hasReminder: boolean;
  deadline: Date;
  priority: "HIGH" | "MEDIUM" | "LOW";
  courseId?: string;
  estTime: number;
}

export const WEIGHTS = {
  DEADLINE: 40,
  PRIORITY: 25,
  TYPE: 20,
  TIME: 15,
};

export const TYPE_SCORES = {
  ASG: 90,
  EXAM: 100,
  PRACTICE: 70,
  READING: 60,
  OTHER: 50,
};

export const PRIORITY_SCORES = {
  HIGH: 100,
  MEDIUM: 60,
  LOW: 30,
};

export class PriorityCalculator {
  static calculateScore(task: TaskPriorityInput): number {
    const daysUntilDeadline =
      (task.deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    const deadlineScore = Math.max(
      0,
      Math.min(100, (1 - daysUntilDeadline / 14) * 100)
    );

    const typeScore = TYPE_SCORES[task.type];
    const priorityScore = PRIORITY_SCORES[task.priority];

    const timeScore = Math.min(100, task.estTime * 10);

    const finalScore =
      deadlineScore * (WEIGHTS.DEADLINE / 100) +
      typeScore * (WEIGHTS.TYPE / 100) +
      priorityScore * (WEIGHTS.PRIORITY / 100) +
      timeScore * (WEIGHTS.TIME / 100);

    return Math.round(finalScore);
  }

  static findOptimalSlot(
    task: TaskPriorityInput,
    availableSlots: TimeSlot[],
    existingTasks: TaskPriorityInput[]
  ): TimeSlot | null {
    const taskScore = this.calculateScore(task);

    const validSlots = availableSlots.filter(
      (slot) => slot.duration >= task.estTime && slot.start < task.deadline
    );

    if (validSlots.length === 0) return null;

    const sortedSlots = validSlots.sort(
      (a, b) => a.start.getTime() - b.start.getTime()
    );

    for (const slot of sortedSlots) {
      if (!this.hasHigherPriorityConflict(slot, existingTasks, taskScore)) {
        return slot;
      }
    }

    return null;
  }

  private static hasHigherPriorityConflict(
    slot: TimeSlot,
    existingTasks: TaskPriorityInput[],
    currentScore: number
  ): boolean {
    return existingTasks.some((task) => {
      const taskStart = new Date(task.deadline);
      taskStart.setHours(taskStart.getHours() - task.estTime);

      const overlaps =
        taskStart <= slot.end && new Date(task.deadline) >= slot.start;

      if (!overlaps) return false;

      const taskScore = this.calculateScore(task);
      return taskScore > currentScore;
    });
  }

  static suggestReschedule(
    tasks: TaskPriorityInput[],
    availableSlots: TimeSlot[]
  ): Map<string, TimeSlot> {
    const schedule = new Map<string, TimeSlot>();

    const sortedTasks = [...tasks].sort(
      (a, b) => this.calculateScore(b) - this.calculateScore(a)
    );

    for (const task of sortedTasks) {
      const slot = this.findOptimalSlot(
        task,
        availableSlots,
        tasks.filter((t) => schedule.has(t.title))
      );

      if (slot) {
        schedule.set(task.title, slot);
      }
    }

    return schedule;
  }
}
