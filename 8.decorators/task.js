//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    let hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value, cache);
      return "Из кеша: " + objectInCache.value;
    }
    let result = func(...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result, cache);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  
  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId) {
      clearTimeout(timeoutId);
    };
    if (!timeoutId) {
      func.call(this, ...args);
      wrapper.count++;
    };

    timeoutId = setTimeout(() => {
      func.call(this, ...args);
      wrapper.count++;
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  
  return wrapper;
}