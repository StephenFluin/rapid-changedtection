declare var Zone;
const BLACKLISTED_ZONE_EVENTS: string[] = [
  'addEventListener:mouseenter',
  'addEventListener:mouseleave',
  'addEventListener:mousemove',
  'addEventListener:mouseout',
  'addEventListener:mouseover',
  'addEventListener:mousewheel',
  'addEventListener:scroll',
  'requestAnimationFrame',
  'setInterval',
  'setTimeout',
];
export const blacklistZone = Zone.current.fork({
  name: 'blacklist',
  onScheduleTask: (delegate, current, target,
                   task) => {
    
    // Blacklist scroll, mouse, and request animation frame events.
    if (task.type === 'eventTask' &&
        BLACKLISTED_ZONE_EVENTS.some(
            (name) => task.source.indexOf(name) > -1)) {
      task.cancelScheduleRequest();
      // Schedule task in root zone, note Zone.root != target,
      // "target" Zone is Angular. Scheduling a task within Zone.root will
      // prevent the infinite digest cycle from appearing.
      return Zone.root.scheduleTask(task);
    } else {
        //console.log(task.type);
      return delegate.scheduleTask(target, task);
    }
  }
});