import { useRef } from "react";

function HorizontallyScrollable({ children, className = "" }) {
    const scrollRef = useRef();
    const isDragging = useRef(false); // Track if dragging is in progress
    let startX, initialScrollLeft;

    const handleMouseDown = (evt) => {
        isDragging.current = true;
        startX = evt.pageX; // Starting X coordinate of the mouse
        initialScrollLeft = scrollRef.current.scrollLeft; // Initial scroll position of the container

        // Prevent default to stop text selection while dragging
        evt.preventDefault();

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (evt) => {
        if (!isDragging.current) return;

        const dx = evt.pageX - startX; // Calculate the distance moved horizontally
        scrollRef.current.scrollLeft = initialScrollLeft - dx; // Update scroll position based on mouse movement
    };

    const handleMouseUp = () => {
        isDragging.current = false; // Stop dragging
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className={className} ref={scrollRef} onMouseDown={handleMouseDown} style={{ overflowX: 'auto', cursor: 'grab' }}>
            {children}
        </div>
    );
}

export default HorizontallyScrollable;
