const DOMNodeCollection = function (htmlArray) {
  this.htmlElements = htmlArray;
};

DOMNodeCollection.prototype.html = function (string) {
  if (string) {
    this.htmlElements.forEach((el) => {
      el.innerHTML = string;
    });
  } else {
    return this.htmlElements[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function () {
  this.htmlElements.forEach((el) => {
    el.innerHTML = "";
  });
};

DOMNodeCollection.prototype.append = function (htmlArray) {
  if (htmlArray instanceof DOMNodeCollection){
    htmlArray.forEach(el => {
      this.htmlElements.forEach(thisEl => {
        thisEl.innerHTML += el.outerHTML;
      });
    });
  } else if (htmlArray instanceof String) {
    this.htmlElements.forEach(el => {
      el.innerHTML += htmlArray;
    });
  }
};

DOMNodeCollection.prototype.attr = function (attrName, attrVal) {
  if (typeof attrVal === undefined) {
    this.htmlElements[0].getAttribute(attrName);
  } else {
    this.htmlElements.forEach(el => {
      el.setAttribute(attrName, attrVal);
    });
  }
};

DOMNodeCollection.prototype.addClass = function (classVal) {
  this.htmlElements.forEach( el => {
    if (el.className.length !== 0) {
      el.className += (' ' + classVal);
    } else {
      el.className = classVal;
    }
  });
};

DOMNodeCollection.prototype.removeClass = function (classVal) {
  let classValArray = classVal.split(' ');
  this.htmlElements.forEach( el => {
    let currentClasses = el.className.split(' ');
    let newClasses = currentClasses.filter(klass => {
      return !classValArray.includes(klass);
    });
    el.className = newClasses.join(' ');
  });
};

DOMNodeCollection.prototype.children = function () {
  let kids = [];
  this.htmlElements.forEach(el => {
    kids = kids.concat(Array.from(el.children));
  });
  return new DOMNodeCollection(kids);
};

DOMNodeCollection.prototype.parent = function () {
  let momOrDad = [];
  this.htmlElements.forEach(el => {
    momOrDad.push(el.parentNode);
  });
  return new DOMNodeCollection(momOrDad);
};

DOMNodeCollection.prototype.find = function (selectors) {
  let selected = [];
  this.htmlElements.forEach(el => {
    selected = selected.concat(Array.from(el.querySelectorAll(selectors)));
  });
  return new DOMNodeCollection(selected);
};

DOMNodeCollection.prototype.remove = function () {
  this.htmlElements.forEach(el => { el.remove(); });
  this.htmlElements = [];
};

DOMNodeCollection.prototype.on = function (eventType, callback) {
  this.htmlElements.forEach( el => {
    el.addEventListener(eventType, callback);
  });
};

DOMNodeCollection.prototype.off = function (eventType, callback) {
  this.htmlElements.forEach( el => {
    el.removeEventListener(eventType, callback);
  });
};

module.exports = DOMNodeCollection;
