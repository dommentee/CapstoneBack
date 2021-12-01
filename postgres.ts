//calll postgres client
import {Client} from 'pg'


const getClient = () => {
    let dbConfig = {
        connectionString: 'postgresql://localhost:5432/procedure',
    }
    
    if(process.env.DATABASE_URL){
        //@ts-ignore allow ssl on dbconfig 
        dbConfig.ssl = {rejectUnauthorized: false}
        dbConfig.connectionString = process.env.DATABASE_URL
    }

    const client = new Client(dbConfig)     
}

export default getClient