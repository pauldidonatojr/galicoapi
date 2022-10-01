require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app1LVKkET0KmS2gL')
  .table('Meals')

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list()
    // const products = records.map((product) => {
    //   const { id } = product
    //   const { name, image, price, temp1, temp2, temp3, temp4, temp5 } =
    //     product.fields
    //   const url = image[0].url
    //   console.log(url)

    //   return { id, name, url, price, temp1, temp2, temp3, temp4, temp5 }
    // })
    return {
      statusCode: 200,
      body: JSON.stringify(records),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
}
