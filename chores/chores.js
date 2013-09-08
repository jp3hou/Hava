function displayChores(areaName){
      var chores = ['mop/sweep', 'trash', 'dishes', 'vacuuming'];
      var housemates = ['Sahar', 'Roxanne', 'Julia', 'Nicole'];
      var currentDate = Date.now(); // corresponds to current time
      var startDate = new Date();
      startDate.setDate(1); // sets the current date ie. 1 sets date to 1 but all else not mutated
      startDate.setMonth(7); // sets the month.
      var elapsedWeeks = Math.floor((currentDate - startDate) / 604800000); // divides milliseconds passed by week
      var object = document.getElementById(areaName);
      object.innerHTML += '';
      for (var i = 0; i < chores.length; i++) {
        
        var matchingIndex = (i + elapsedWeeks);
        
        // make chores loop around if weeks passed number of chores
        if (matchingIndex >= chores.length) {
          while ((matchingIndex >= chores.length) && ((matchingIndex-chores.length) >=  0))
          {
            matchingIndex = (matchingIndex - chores.length);
          }
        }
    
        // print the statement
        object.innerHTML += '<li>' + housemates[i] + ' is assigned ' + chores[matchingIndex] + ' this week.</li>';
        if ((matchingIndex + 1) < chores.length)
        {
          object.innerHTML += '<li>' + ' Next week ' + housemates[i] + ' has ' + chores[matchingIndex+1] + '</li>';   
        }
        else
        {
          object.innerHTML += '<li>' +x ' Next week ' + housemates[i] + ' has ' + chores[0] + '</li>';
        }
      }
    }