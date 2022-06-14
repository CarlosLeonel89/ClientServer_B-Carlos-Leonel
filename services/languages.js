const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT id, name, description, year
        FROM languages LIMIT ${offset},${config.listPerPage}
        `
    );
    const data = helper.emptyOrRows(rows)
    const meta = {page};
    
    return {
        data,
        meta
    }
}

module.exports = {
    getMultiple
}

async function create(language){
    console.log(`INSERT INTO languages
    (name,description,year)
    VALUES
    ('${language.name}','${language.description}',${language.year})
    `);

    const result = await db.query(
        `INSERT INTO languages (name,description,year) VALUES
        ('${language.name}','${language.description}',${language.year})
        `
    );

    let message = "Error in creating programming language";
    if(result.affectedRows){
        message = "A new language has been added";
    }

    return {message}

}

module.exports = {
    getMultiple,
    create
}

//Inestar el codigo