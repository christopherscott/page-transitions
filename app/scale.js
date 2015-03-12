import {animate, stop} from 'liquid-fire';

export default function scale(oldview, insertNew) {

  // DOM query
  stop(oldview);

  return animate(oldview, {
      scale: 0.1,
      opacity: 0
    })
    .then(insertNew)
    .then(function(newview) {
      return animate(newview, {
        scale: [1, 0.1],
        opacity: [1, 0]
      });
    });

}
