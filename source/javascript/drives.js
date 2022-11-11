const drivelist = require('drivelist');

const drives = await drivelist.list();
const list = document.getElementById('list');

// loop through the drives
drives.forEach((drive) => {
  // create a list item for each drive
  const item = document.createElement('input');
  item.setAttribute('type', 'button');
  item.setAttribute('value', drive.displayName);
  item.setAttribute('id', drive.mountpoints[0].path);

  // append the drive to the list
  list.appendChild(item);
});
