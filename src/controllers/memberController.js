const LibraryDB = require("../database/LibraryDB");
const Member = require("../models/Member");

class MemberController {
  static addMember(id, name, email) {
    const newMember = new Member(id, name, email);
    LibraryDB.addMember(newMember);
    console.log(`Membro "${name}" adicionado com sucesso.`);
  }

  static getMembers(filterFn = null) {
    return LibraryDB.getMembers(filterFn);
  }

  static updateMember(id, updatedData) {
    try {
      const updatedMember = LibraryDB.updateMember(id, updatedData);
      console.log(`Membro de ID ${id} atualizado com sucesso.`);
      return updatedMember;
    } catch (error) {
      console.error(error.message);
    }
  }

  static deleteMember(id) {
    try {
      LibraryDB.removeMember(id);
      console.log(`Membro de ID ${id} removido com sucesso.`);
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = MemberController;
