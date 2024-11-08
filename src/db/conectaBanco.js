const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://postgres.pdaeziglryzqfkbxxcox:adonaisupabase@aws-0-sa-east-1.pooler.supabase.com:6543/postgres'
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));
 

const insertData = async (nome, data, servico,telefone) => {
    const query = 'INSERT INTO registros (nome, data, servico, telefone) VALUES ($1, $2, $3,$4)';
    const values = [nome, data, servico, telefone];

    try {
        const res = await client.query(query, values);
        console.log('Data inserted successfully:', res);
    } catch (err) {
        console.error('Error inserting data:', err.stack);
    }
};

const selectData = async () => {
    const query = 'SELECT * FROM registros WHERE data = CURRENT_DATE - INTERVAL \'30 days\''
    try {
        const res = await client.query(query); 
        return res.rows;
    }catch (err){
        console.error('Error listing data:', err.stack);
    } 
}

const selectSemana = async () => {
    const query = "SELECT * FROM registros WHERE data BETWEEN CURRENT_DATE - INTERVAL '36 days' AND CURRENT_DATE - INTERVAL '30 days' ORDER BY data ASC LIMIT 100;";
    try {
        const res = await client.query(query); 
        return res.rows;
    }catch (err){
        console.error('Error listing data:', err.stack);
    } 
}

module.exports = { insertData, selectData,selectSemana };





