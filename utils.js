function randomGenerator(min, max) {
  return min + Math.random() * (max - min);
}

function collisionDetection(rect1, rect2) {
  return (
    rect1.x + rect1.width > rect2.Px &&
    rect1.y < rect2.Py + rect2.Pheight &&
    rect1.y + rect1.height > rect2.Py
  );
}
