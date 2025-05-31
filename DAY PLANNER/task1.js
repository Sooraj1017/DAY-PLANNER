function saveTask(id) {
      const value = document.getElementById(id).value;
      localStorage.setItem(id, value);
      alert('Task saved!');
    }

    function loadTasks() {
      const slots = ['slot1', 'slot2', 'slot3', 'slot4','slot5','slot6'];
      slots.forEach(id => {
        document.getElementById(id).value = localStorage.getItem(id) || '';
      });
    }

    function clearAll() {
      const slots = ['slot1', 'slot2', 'slot3', 'slot4','slot5','slot6'];
      slots.forEach(id => {
        document.getElementById(id).value = '';
        localStorage.removeItem(id);
      });
    }

    window.onload = loadTasks;