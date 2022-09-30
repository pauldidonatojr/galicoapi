GET: Read Data
Post: Insert Data
Put: Update Data
Delete: Delete Data

GET: www.url.com/api/orders : get all orders
POST: www.url.com/api/orders : place an order (send data)
GET: www.url.com/api/orders/:id : get single order (path params)
PUT: www.url.com/api/orders/:id : update specific order (params + send data)
DELETE: www.url.com/api/orders/:id : delete order (path params)


API VS SSR

API - JSON
SEND DATA
RES.JSON()

SSR - TEMPLATE
SEND TEMPLATE
RES.RENDER()

