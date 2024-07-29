const PROTO_PATH = './customers.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
})

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server =  new grpc.server();

const customers = [
  {
    id: "diofjieorjf",
    name: "Abhishek",
    age: 23,
    address: "Raxaul"
  },
  {
    id: "aiofjieorjf",
    name: "Abhi3",
    age: 23,
    address: "Birgunj"
  }
];

server.addService(customersProto.CustomerService.service, {
  getAll: (call, callback) => {
    callback(null, {customers});
  },
  get: (call, callback) => {

  },
  insert: (call, callback) => {
    
  },
  update: (call, callback) => {
    
  },
  remove: (call, callback) => {
    
  },
})

server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInscure());
server.start();