module.exports = (function() {
  const getMadlibs = (num = 0) => {
    const madlibs = [
      `Programming is a craft. At its simplest, it comes down to getting a {noun} to do what you want it to do (or what your {noun} wants it to do). As a {job}, you are part listener, part advisor, part interpreter, and part {job}. You try to {verb} {adjective} requirements and find a way of expressing them so that a mere {noun} can do them justice. You try to {verb} your work so that others can {verb} it, and you try to engineer your {noun} so that others can {verb} on it. What's more, you try to do all this against the relentless {verb, ending in -ing} of the {noun}. You work {adjective} miracles every day.`,
    ];

    return madlibs[num];
  }

  return getMadlibs;
})();
