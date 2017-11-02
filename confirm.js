const data = require('./data/export.json');

// TODO djw: these counts should come from the studyFormat file
const groupACount = 83;
const groupBCount = 68;
const GROUP_A = 'groupA';
const GROUP_B = 'groupB';

Object.keys(data).sort().forEach((id, index) => {
  let group = data[id].__taskGroup;
  let tasks = data[id].__tasks;
  let missingTasks = [];
  let taskCount = 0;

  if(group === GROUP_A) {
    taskCount = groupACount;
  } else if(group === GROUP_B) {
    taskCount = groupBCount;
  }

  for(var i = 1; i <= taskCount; i++) {
    if(tasks[i] == undefined) {
      missingTasks.push(i)
    }
  }

  let result = missingTasks.length
    ? (' -> checked:missing[' + missingTasks.join(',') + ']')
    : ' -> checked:ok';

  console.log((index + 1) + ') ' + id + ':' + group + result);
});

