$(document).ready(function() {
    // Modify the toObject method using map and reduce
    function toObject() {
      const taskObjects = $('#tblTasks tbody tr').map(function() {
        const name = $(this).find('td:nth-child(1)').text();
        const due = $(this).find('td:nth-child(2) time').attr('datetime');
        const category = $(this).find('td:nth-child(3)').text();
        return { name, due, category };
      }).get();
  
      return taskObjects.reduce((acc, task) => {
        acc[task.name] = { due: task.due, category: task.category };
        return acc;
      }, {});
    }
  
    // Other code remains unchanged
  
    // Print object to console button
    $('#btnPrintObject').click(function(evt) {
      const taskObject = toObject();
      console.log(JSON.stringify(taskObject, null, 2));
    });
  
    // Load object into console button
    $('#btnLoadObject').click(function(evt) {
      const sampleObject = {
        'Return library books': {
          due: '2013-10-14',
          category: 'Personal'
        },
        // Add other task objects as needed
      };
     
      fromObject(sampleObject);
    });
  });
  