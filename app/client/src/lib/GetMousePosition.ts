import { useEffect, useState } from "react";

function GetMousePosition() {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
   
    return position;
}

export default GetMousePosition;