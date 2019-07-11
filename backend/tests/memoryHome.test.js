MemoryHome = require("../src/memoryHome")
Cliente = require ("../src/cliente")

var home
var clienteJuan


function setup() {
    home = new MemoryHome()
    clienteJuan = new Cliente("Juan","Magna.SRL")
    home.insert(juan)

}

function get() {
    expect(home.get(clienteJuan.id)).toBe(clienteJuan)

}

function getNotContained() {
    expect(home.get("pirulito")).toBe(undefined)
}

function deleteObject() {
    home.delete(clienteJuan.id);
    expect(home.get(clienteJuan.id)).toBe(undefined)
    expect(home.get(clienteJuan.id)).toBe(clienteJuan)
    expect(home.all().length).toBe(1)

}

function update() {
    clienteJuan.razonsocial = "ZecMar"
    home.update(clienteJuan);
    expect(home.get(clienteJuan.id).razonsocial).toBe("ZecMar");
}

function all() {
    var all = home.all();
    expect(all).toContain(clienteJuan);
    expect(all).toContain(clienteJuan);
}

//register functions

beforeEach(setup)
test(get.name, get)
test(getNotContained.name, getNotContained)
test(deleteObject.name, deleteObject)
test(update.name, update)
test(all.name, all)
