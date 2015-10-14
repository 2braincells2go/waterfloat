# waterFloat
A simple Jquery Plugin to animate a div to give float effect as it floats on water, like a wooden log floats on water.
#Usage
step1: get the disired element to be float.
    
      var elem = $('#btn1'); // jquery selector to get a specific element with ID
      
step2: initilize parameters to send and create new object for waterFloat.

      var time = 900; //time in milli seconds
      var degrees = 1; //angle of degrees to float
      var vertical_displacement = 10; //value in pixels at which the div should take vertical displacements to float 
      var waterfloat = new waterFloat(elem,time,degrees,vertical_displacement);
      
Note: before using we have to load Jquery.

see example for better understanding and usage.
    

