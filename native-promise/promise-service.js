function get(url) {
  const request = new XMLHttpRequest();
  
  return new Promise(function (onResolve, onError) {
    request.open('GET', url);
    
    request.onload = function () {
      if(request.status === 200) 
        onResolve(JSON.parse(request.response));
      else
        onError(Error(request.statusText));
    };

    request.onerror = function () {
      onError(Error('Network error'));
    }

    request.send();
  });
}