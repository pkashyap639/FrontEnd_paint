// Author :Piyush Kant
// Id: C0893688

document.addEventListener('DOMContentLoaded', ()=> {
    const myCanvas = document.getElementById('main');
    const myContext = myCanvas.getContext('2d');
    let drawingOn = false;
    let initialColor = 'black';
    let brushSize = 5;
  
    setColor = (color)=> {
      initialColor = color;
    }
  
    myEraser=()=> {
      initialColor = 'white';
    }
  
    eraseCanvas=()=> {
      myContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
  
    draw=(event)=> {
      if(drawingOn === false){
        return false;
      }
  
      myContext.lineWidth = brushSize;
      myContext.lineCap = 'round';
      myContext.strokeStyle = initialColor;
  
      myContext.lineTo(event.clientX - myCanvas.offsetLeft, event.clientY - myCanvas.offsetTop);
      myContext.stroke();
      myContext.beginPath();
      myContext.moveTo(event.clientX - myCanvas.offsetLeft, event.clientY - myCanvas.offsetTop);
    }
  
    myCanvas.addEventListener('mousedown', () => drawingOn = true);
    myCanvas.addEventListener('mouseup', () => {
      drawingOn = false;
      myContext.beginPath();
    });
    myCanvas.addEventListener('mousemove', draw);
  
    document.getElementById('erase').addEventListener('click', myEraser);
    document.getElementById('new').addEventListener('click', eraseCanvas);
    document.getElementById('black').addEventListener('click', () => setColor('black'));
    document.getElementById('pink').addEventListener('click', () => setColor('pink'));
    document.getElementById('blue').addEventListener('click', () => setColor('blue'));
    document.getElementById('yellow').addEventListener('click', () => setColor('yellow'));
  
    let slider = document.getElementById('slider');
    let brushSizeInstance = document.getElementById('brushSize');
    slider.addEventListener('input', function() {
      brushSize = this.value;
      brushSizeInstance.textContent = this.value;
    });
  });
  