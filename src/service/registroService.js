const db = require('../db/conectaBanco');

function gravarRegistro(nome,data,servico, telefone){
    try{
        db.insertData(nome,data,servico, telefone);
    } catch (err){      
        console.error('Error inserting data:', err.stack);
    }
}

function listarRegistrosHoje(){
    try{
        return db.selectData();
    } catch (err){
        console.error('Error listing data:', err.stack);
    }
}

function listarRegistrosSemana(){
    try{
        return db.selectSemana();
    } catch (err){
        console.error('Error listing data:', err.stack);
    }
}

module.exports = { gravarRegistro, listarRegistrosHoje,listarRegistrosSemana };