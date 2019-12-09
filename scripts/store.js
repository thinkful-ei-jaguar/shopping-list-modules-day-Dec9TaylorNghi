import item from './item.js';

let items= [];
let hideCheckedItems = false;

function findById(id){
  return this.items.find(item => item.id===id);

}

function addItem(name) {
    try {
      item.validateName(name);
      let newItem = item.create(name);

      this.items.push(newItem);
    }
    catch(error) {
        console.log(`error: ${error}`);
    }
}

function findAndToggleChecked(id) {
    this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName(id, newName){
    try {
        item.validateName(newName);
        this.findById(id).name = newName;
    }
    catch(error){
        console.log(`cannot update name: ${error}`);
    }
}

function findAndDelete(id) {
    let index = this.items.findIndex(item=>item.id===id);
    this.items.splice(index, 1);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};
