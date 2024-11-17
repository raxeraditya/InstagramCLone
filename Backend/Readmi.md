// file name camel case
// model name first letter uppercase all capital
// function name camel case
// data by body allways name is body
// validate new variable name is data
// zod validation type ojbect is allways end zodvalidation keyword with camel case
// another type is allways camel case
// database file all first and another word letter is cappital

        env

PORT=3000
JWT_SECRET=mysecret
MONGO_URI=mongodb://0.0.0.0:27017/InstagramClone

If a user already liked the post, their ID gets removed ($pull)
If a user hasn't liked the post, their ID gets added ($addToSet)
$addToSet only add value if it is not exists

Use updateOne() for simple single document updates
Use updateMany() for bulk updates
Use findOneAndUpdate() when you need the updated document returned
Use findByIdAndUpdate() when updating by ID and need the document returned
