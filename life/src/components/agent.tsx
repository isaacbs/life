import React from 'react';

interface AgentState  {
  color?: string;
  x: number;
  y: number;
  angle: number;

}
interface AgentProps {
  width: number;
  height: number;
  color: string;
}

class Agent extends React.Component<AgentProps, AgentState> {
  private intervalID: number | undefined;

  constructor(props: AgentProps) {
    super(props);
    this.state = {
      x: 0,
      y: 0, 
      angle: Math.random()*Math.PI*2,
    };
  }
  
  componentDidMount(): void {
    this.intervalID = window.setInterval(() => {
      this.setState(prevState => {
        const moveSpeed = 0.25;
        const {x, y, angle} = prevState;
        const {width, height} = this.props;
        const direction = [Math.cos( this.state.angle), Math.sin(this.state.angle)];
        var newX = this.state.x + direction[0]*moveSpeed*16;
        var newY = this.state.y + direction[1]*moveSpeed*16;
        var newAngle = this.state.angle;
        
        if (newX >= width || newX < 0 || newY >= height || newY < 0) {
          newX = Math.min(width-0.01, Math.max(0, newX));
          newY = Math.min(height-0.01, Math.max(0, newY));
          newAngle = Math.random()*2*Math.PI;
        }
        return {
          x: newX,
          y: newY,
          angle: newAngle,
        };
      });
    }, 16);

  }

  componentWillUnmount(): void {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  render() {
    const { x, y} = this.state;
    const { width, height, color} = this.props;
    return (
      <div 
        style={{
          width,
          height,
          position: 'relative',
        }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: color,
              position: 'absolute',
              top: y,
              left: x,
            }}
          />
        </div>
    );
  }
}
export default Agent;

// function UpdateAgent() {
//   return (
//     <>
//     Hello
//     This is my main page
//     </>
//   );
// }

// export default UpdateAgent;
