// Thanks For W3 School 

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }



// Some Properties 
let htmlDragableIds = 0;

// main function 
function start(){
    // Node Buttons 
    let htmlButtonsList = '<div style="position: fixed; top:0; left:0; background-color : aqua; width: 100px; height : auto">';
    
    let numberNodeButton = '<button id="numberNodeBtn">Number Node</button>';
    htmlButtonsList += numberNodeButton;

    htmlButtonsList += '<br><br></div>';
    document.write(htmlButtonsList);


    // Add Event Listner for number node button
    function some(){
        alert('Changed');
    }
    document.querySelector('#numberNodeBtn').addEventListener('click', e=>{
        htmlDragableIds -= -1;

        htmlNumberNode = '<div id="numberNode'+htmlDragableIds.toString()+'" class="allBodyDrag">';
        htmlNumberNode += '<div id="mydivheader">Move ...</div><br><br>';
        htmlNumberNode += '<div><input id="numberNodeEdit'+htmlDragableIds.toString()+'Value" type="number"></div>';
        htmlNumberNode += '<button id="numberNodeEdit'+htmlDragableIds.toString()+'Remove">Remove</button>';
        htmlNumberNode += '<button id="numberNodeEdit'+htmlDragableIds.toString()+'">Edit</button>';
        htmlNumberNode += '</div>';
        document.write(htmlNumberNode);


        // Adding Styles 
        let someStyles = '<style>#mydivheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;} .allBodyDrag{position: absolute;z-index: 9;background-color: #f1f1f1;text-align: center;border: 1px solid #d3d3d3;} </style>';
        document.write(someStyles);

        // Being Able To Move
        let got = document.querySelector('#numberNodeEdit' + htmlDragableIds.toString());
        got.addEventListener('click', e=>{
            ss = prompt('Write The Number');
            document.querySelector('#'+got.id+'Value').value = ss;
        });
        
        let newGot = document.querySelector('#'+got.id+'Remove');
        newGot.addEventListener('click', e=>{
            let myID = '#' + got.id.substring(0,newGot.id.length - 'nRemoveEdit'.length);
            myID += newGot.id.charAt(newGot.id.length - 'Remmove'.length);
            let allNode = document.querySelector(myID);
            allNode.remove();
        });

        
        dragElement(document.getElementById("numberNode" + htmlDragableIds.toString()));
    });
}

// To Run The Program
document.querySelector('button').addEventListener('click', e =>{
    start();
});