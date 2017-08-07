let ArrowKeysReact = {};

ArrowKeysReact._config = {};

ArrowKeysReact.config = (config) => {
  const options = ['right', 'left', 'up', 'down'];
  for (let option of options) {
    if (config.hasOwnProperty(option)) {
      ArrowKeysReact._config[option] = config[option];
    }
  }
};

ArrowKeysReact.events = {
  onKeyDown: (e) => {
    if (e.keyCode === 37){
      if(ArrowKeysReact._config.hasOwnProperty('left')){
        ArrowKeysReact.left();
      }
    } else if (e.keyCode === 39) {
      if(ArrowKeysReact._config.hasOwnProperty('right')){
        ArrowKeysReact.right();
      }
    } else if (e.keyCode === 38) {
      if(ArrowKeysReact._config.hasOwnProperty('up')){
        ArrowKeysReact.up();
      }
    } else if (e.keyCode === 40) {
      if(ArrowKeysReact._config.hasOwnProperty('down')){
        ArrowKeysReact.down();
      }
    }
  }
};

export default ArrowKeysReact;