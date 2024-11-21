import { AlertCircle, Clock, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { 
  Bar, 
  BarChart,
  CartesianGrid, 
  Legend, 
  Line, 
  LineChart,
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  PieChart as RechartsPieChart, 
  Pie, 
  Cell,
} from "recharts";

function Analytics() {
  // Dummy data for statistics
  const studyStats = {
    totalStudyTime: 1500, // 25 hours in minutes
    sessionsCompleted: 15,
    tasksTotal: 25,
    tasksCompleted: 12,
    focusTime: 1200, // 20 hours in minutes
    averageSessionLength: 45,
  };

  // Dummy data for daily study time
  const dailyStudyData = [
    { date: "Mon", studyTime: 3 },
    { date: "Tue", studyTime: 4.5 },
    { date: "Wed", studyTime: 2 },
    { date: "Thu", studyTime: 5 },
    { date: "Fri", studyTime: 3.5 },
    { date: "Sat", studyTime: 1.5 },
    { date: "Sun", studyTime: 4 },
  ];

  // Dummy data for task distribution
  const taskDistribution = [
    { type: "Homework", count: 10, completed: 6 },
    { type: "Reading", count: 8, completed: 4 },
    { type: "Projects", count: 4, completed: 1 },
    { type: "Practice", count: 3, completed: 1 },
  ];

  // Colors for pie chart
  const COLORS = ['#8884d8', '#82ca9d'];

  return (
    <>
      <div className="space-y-6 p-12 bg-inherit">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 ">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[--secondary]">Total Study Time</p>
                  <h3 className="text-2xl font-bold mt-1">
                    {Math.round(studyStats.totalStudyTime / 60)}h
                  </h3>
                </div>
                <Clock className="text-blue-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[--secondary]">Tasks Completed</p>
                  <h3 className="text-2xl font-bold mt-1">
                    {studyStats.tasksCompleted}/{studyStats.tasksTotal}
                  </h3>
                </div>
                <Target className="text-green-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[--secondary]">Focus Sessions</p>
                  <h3 className="text-2xl font-bold mt-1">
                    {studyStats.sessionsCompleted}
                  </h3>
                </div>
                <TrendingUp className="text-purple-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[--secondary]">Completion Rate</p>
                  <h3 className="text-2xl font-bold mt-1">
                    {Math.round((studyStats.tasksCompleted / studyStats.tasksTotal) * 100)}%
                  </h3>
                </div>
                <AlertCircle className="text-orange-500" size={24} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/*Charts*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Daily Study Time Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Daily Study Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dailyStudyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis className=""/>
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="studyTime" 
                      stroke="#8884d8" 
                      name="Study Hours"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Task Distribution Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Task Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={taskDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" name="Total Tasks" fill="#8884d8" />
                    <Bar dataKey="completed" name="Completed" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Focus Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Focus Time Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={[
                        { name: 'Focus Time', value: studyStats.focusTime },
                        { name: 'Break Time', value: studyStats.totalStudyTime - studyStats.focusTime }
                      ]}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Productivity Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Productivity Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-[--ternary] rounded-lg">
                  <h4 className="font-medium mb-2">Most Productive Time</h4>
                  <p className="text-gray-600">Based on your study patterns: Morning</p>
                </div>
                <div className="p-4 bg-[--ternary] rounded-lg">
                  <h4 className="font-medium mb-2">Average Session Length</h4>
                  <p className="text-gray-600">
                    {studyStats.averageSessionLength} minutes
                  </p>
                </div>
                <div className="p-4 bg-[--ternary]rounded-lg">
                  <h4 className="font-medium mb-2">Focus Score</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[--ternary] h-2 rounded-full">
                      <div 
                        className="bg-[--secondary] h-2 rounded-full"
                        style={{ 
                          width: `${(studyStats.focusTime / studyStats.totalStudyTime) * 100}%` 
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {Math.round((studyStats.focusTime / studyStats.totalStudyTime) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Analytics;