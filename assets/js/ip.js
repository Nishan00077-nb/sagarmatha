document.getElementById('copyButton').addEventListener('click', function() {
    const ipToCopy = 'sagarmatha.or-g.net:25812';
  
    navigator.clipboard.writeText(ipToCopy).then(function() {
      console.log('IP address copied to clipboard');
      showPopup();
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  });
  
  function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  
    document.getElementById('okButton').addEventListener('click', function() {
      popup.style.display = 'none';
    });
  }
  