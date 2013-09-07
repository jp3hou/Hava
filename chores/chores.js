    function go()
    {
      alert("header1");
    }

    function displayChores(areaName){
      var chores = ['mop/sweep', 'trash', 'dishes', 'clean'];
      var housemates = ['Sahar', 'Roxanne', 'Julia', 'Nicole'];
      var currentDate = Date.now(); // corresponds to current time
      var startDate = new Date();
      startDate.setDate(1);
      var elapsedWeeks = Math.floor((currentDate - startDate) / 604800000);

      var object = document.getElementById(areaName);
      object.innerHTML += '';

      for (var i = 0; i < chores.length; i++) {
        
        var matchingIndex = (i + elapsedWeeks);
        
        if (matchingIndex >= chores.length) {
          while ((matchingIndex >= chores.length) && ((matchingIndex-i) >=  0))
          {
            matchingIndex = (matchingIndex - i);
          }
        }
    
        object.innerHTML += '<li>' + housemates[matchingIndex] + ' is assigned ' + chores[matchingIndex] + ' this week.</li>';
      }
    }