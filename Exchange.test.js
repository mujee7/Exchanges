import {tokens,ETHER_ADDRESS,EVM_REVERT,ether} from './helper'
const Token=artifacts.require("./Token")
const Exchange= artifacts.require("./Exchange");
require('chai')
  .use(require('chai-as-promised'))
  .should()

contract("Exchange",([deployer,feeAccount,user1,user2])=>{
let token
    let exchange
const feePercent=10

beforeEach(async()=>{
    token=await Token.new();
    token.transfer(user1,tokens(100),{from:deployer})
    exchange = await Exchange.new(feeAccount,feePercent)

})

// describe("deployment",()=>{
//     it("tracks the fee account",async()=>{
//         const result = await exchange.feeAccount()
//         result.should.equal(feeAccount)
//     })
//     it("tracks the fee Percent",async()=>{
//         const result =await exchange.feePercent()
//         result.toString().should.equal(feePercent.toString())
//     })
// })
// describe("depositing tokens",()=>{
//     let result
//     let amount
//     describe('success', () => {
//         beforeEach(async () => {
//           amount = tokens(10)
//           await token.approve(exchange.address, amount, { from: user1 })
//           result = await exchange.depositToken(token.address, amount, { from: user1 })
//         })
  
//         it('tracks the token deposit', async () => {
//           // Check exchange token balance
//           let balance
//           balance = await token.balanceOf(exchange.address)
//           balance.toString().should.equal(amount.toString())
//         //   console.log(exchange.address.toString())
//         //   console.log(exchange.hi().emit)
//           // Check tokens on exchange
//           balance=await exchange.tokens(token.address,user1)
//           balance.toString().should.equal(amount.toString())
       
//         })
//         it("emitting exchange Deposit event calls", async()=>{
//             const log =result.logs[0]
//             // console.log(log)
//             log.event.should.equal("Deposit")
//             const event=log.args
//             event.token.should.equal(token.address,"token is correct")
//             // console.log(event.user.toString())
//             // console.log(user1.toString())
//             event.user.toString().should.equal(user1.toString(),"user is correct")
//             event.amount.toString().should.equal(amount.toString(),"amount is correct")
//             event.balance.toString().should.equal(amount.toString(),"user is correct")
      
      
//           })
    
  
    
// })
// describe("failure",async()=>{
//     it("rejects either deposits",async()=>{
//         await exchange.depositToken(ETHER_ADDRESS,tokens(10),{from:user1}).should.be.rejected
//     })
//     it("fails when no tokens are approved",async()=>{
//         await exchange.depositToken(ETHER_ADDRESS,tokens(10),{from:user1}).should.be.rejected
//     })
        
// })
// })
// describe("depositing ether",async()=>{
// let result
// let amount
// beforeEach(async()=>{
// amount=ether(1)
//     result=await exchange.depositEther({from:user1,value:amount});
// })
// it("tracks the ether deposit",async()=>{
//     const balance= await exchange.tokens(ETHER_ADDRESS,user1);
//     balance.toString().should.equal(amount.toString());

// })

// it("emitting exchange ether Deposit event calls", async()=>{
//       const log =result.logs[0]
//       // console.log(log)
//       log.event.should.equal("Deposit")
//       const event=log.args
//       event.token.should.equal(ETHER_ADDRESS,"token is correct")
//       // console.log(event.user.toString())
//       // console.log(user1.toString())
//       event.user.toString().should.equal(user1.toString(),"user is correct")
//       event.amount.toString().should.equal(amount.toString(),"amount is correct")
//       event.balance.toString().should.equal(amount.toString(),"user is correct")


//     })
// describe("success",async()=>{
// beforeEach(async()=>{
   
//     result=await exchange.withdrawEther(amount,{from:user1})
// })
// it("withdraw ether funds",async()=>{
//  const balance = await exchange.tokens(ETHER_ADDRESS,user1);
// balance.toString().should.equal("0")    
// })
// it("withdraw ether event calls",async()=>{
//     const log =result.logs[0]
//             // console.log(log)
//             log.event.should.equal("Withdraw")
//             const event=log.args
//             event.token.should.equal(ETHER_ADDRESS,"token is correct")
//             // console.log(event.user.toString())
//             // console.log(user1.toString())
//             event.user.toString().should.equal(user1.toString(),"user is correct")
//             event.amount.toString().should.equal(amount.toString(),"amount is correct")
//             event.balance.toString().should.equal("0","user is correct")

// })
// describe("failure",async()=>{
//     it("not enough balance",async()=>{
//         await exchange.withdrawEther(ether(100),{from:user1}).should.be.rejected
//     })
// })
//     }) 


// })
// describe('fallback', () => {
//     it('reverts when Ether is sent', async () => {
//       await exchange.sendTransaction({ value:ether(1), from: user1 }).should.be.rejected
//     })
//   })

//   describe("success",async()=>{
//     let result
//     let amount
//     beforeEach(async()=>{
        
//         amount=tokens(10)
       
//        await token.approve(exchange.address, amount, { from: user1 })
//        await exchange.depositToken(token.address, tokens(5), { from: user1 })
//        result= await exchange.withdrawToken(token.address,tokens(5),{from:user1})
//     })
//   it("withdraw event calls",async()=>{
//     const log =result.logs[0]
//                 // console.log(log)
//                 log.event.should.equal("Withdraw")
//                 const event=log.args
//                 event.token.should.equal(token.address,"token is correct")
//                 // console.log(event.user.toString())
//                 // console.log(user1.toString())
//                 event.user.toString().should.equal(user1.toString(),"user is correct")
//                 event.amount.toString().should.equal(tokens(5).toString(),"amount is correct")
//                 event.balance.toString().should.equal("0","user is correct")
    
//     })
//     it("withdraw token funds",async()=>{
//         const balance = await exchange.tokens(token.address,user1);
//        balance.toString().should.equal("0")    
//        })
//     describe("failure",async()=>{
//         it("not enough balance",async()=>{
//             await exchange.withdrawToken(token.address,ether(100),{from:user1}).should.be.rejectedWith(EVM_REVERT)
//         })
//         it("no ether transaction",async()=>{
//             await exchange.withdrawToken(ETHER_ADDRESS,ether(1),{from:user1}).should.be.rejectedWith(EVM_REVERT)
//         })
//     })
//     describe("checking balances",async()=>{
//         let balance
//         beforeEach(async()=>{

//            await exchange.depositEther({from:user1,value:ether(1)})
//         })
//         it("returns user balance",async()=>{
//          balance=await exchange.balanceOf(ETHER_ADDRESS,user1)
//          balance.toString().should.equal(ether(1).toString())
//         })
//     })
//         }) 
    
// describe("Make order",async()=>{
// let result
// beforeEach(async()=>{
    
//     result=await exchange.makeOrder(token.address,tokens(1),ETHER_ADDRESS,ether(1),{from:user1})
// })

// it("TRACKS THE NEWLY CREATED ORDER  ",async()=>{
//     const ordercount =await exchange.orderCount()
//     ordercount.toString().should.equal("1")
//     const order= await exchange.orders("1")
//     order.id.toString().should.equal("1")
//     order.user.toString().should.equal(user1.toString())
//     order.tokenGet.toString().should.equal(token.address.toString())
//     order.tokenGive.toString().should.equal(ETHER_ADDRESS.toString())
//     order.amountGet.toString().should.equal(tokens(1).toString())
//     order.amountGive.toString().should.equal(ether(1).toString())
//     order.timestamp.toString().length.should.be.at.least(1,"time is present")
// })
// it("Make order event calls",async()=>{
//     const log =result.logs[0]
//      // console.log(log)
//                 log.event.should.equal("Order")
//                 const event=log.args
//                 event.id.toString().should.equal("1")
//                 event.user.toString().should.equal(user1.toString())
//                 event.tokenGet.toString().should.equal(token.address.toString())
//                 event.tokenGive.toString().should.equal(ETHER_ADDRESS.toString())
//                 event.amountGet.toString().should.equal(tokens(1).toString())
//                 event.amountGive.toString().should.equal(ether(1).toString())
//                 event.timestamp.toString().length.should.be.at.least(1,"time is present")
// })   


// })   
// describe("Cancel order",async()=>{
//     let result
//     beforeEach(async()=>{
//         await exchange.depositEther({from:user1,value:ether(1)})
//         await exchange.makeOrder(token.address,tokens(1),ETHER_ADDRESS,ether(1),{from:user1})
//     }) 
//     it("success",async()=>{
//         beforeEach(async()=>{
//             result=await exchange.cancelOrder(1,{from:user1})
//         })
//         it("updates cancelled order",async()=>{
//             const orderCancelled=await exchange.orderCancelled(1)
//             orderCancelled.should.equal(true)
//         })
//         it("Emits a Cancel Event",async()=>{
//             const log =result.logs[0]
//              // console.log(log)
//                         log.event.should.equal("Order")
//                         const event=log.args
//                         event.id.toString().should.equal("1")
//                         event.user.toString().should.equal(user1.toString())
//                         event.tokenGet.toString().should.equal(token.address.toString())
//                         event.tokenGive.toString().should.equal(ETHER_ADDRESS.toString())
//                         event.amountGet.toString().should.equal(tokens(1).toString())
//                         event.amountGive.toString().should.equal(ether(1).toString())
//                         event.timestamp.toString().length.should.be.at.least(1,"time is present")
//         })  
//     })
//     describe ("failure",async()=>{
//         it("rejects invalid order id",async()=>{
//             const invalidOrder=99999;
//             await exchange.cancelOrder(invalidOrder,{from:user1}).should.be.rejectedWith(EVM_REVERT)
//         })
//         it("rejects invalid address for id/unauthorized cancellation",async()=>{
            
//             await exchange.cancelOrder(1,{from:user2}).should.be.rejectedWith(EVM_REVERT)
//         })
//     })
     
// })
describe("order actions",async()=>{
    
    beforeEach(async()=>{
        await exchange.depositEther({from:user1,value:ether(1)})
        await token.transfer(user2,tokens(100),{from:deployer})
        await token.approve(exchange.address,tokens(2),{from:user2})
        await exchange.depositToken(token.address,tokens(2),{from:user2})
        await exchange.makeOrder(token.address,tokens(1),ETHER_ADDRESS,ether(1),{from:user1})
    }) 
    describe("filling orders",async()=>{
        let result
        describe("success",async()=>{
        beforeEach(async()=>{
            result=await exchange.fillOrder(1,{from:user2})
        })
        it("executes the trade and charge the fees",async()=>{
            let balance;
            balance= await exchange.balanceOf(token.address,user1)
            balance.toString().should.equal(tokens(1).toString(),"yahan ghalat hai 1")
            balance= await exchange.balanceOf(ETHER_ADDRESS,user2)
            balance.toString().should.equal(ether(1).toString(),"yahan ghalat hai 2")
            balance= await exchange.balanceOf(ETHER_ADDRESS,user1)
            balance.toString().should.equal("0","yahan ghalat hai 3")
            balance= await exchange.balanceOf(token.address,user2)
            balance.toString().should.equal(ether(0.9).toString(),"yahan ghalat hai 4")
            balance= await exchange.balanceOf(token.address,feeAccount)
            balance.toString().should.equal(ether(0.1).toString(),"yahan ghalat hai 5")

        })
        it("update filled orders",async()=>{
            const orderFilled=await exchange.orderFilled(1)
            orderFilled.should.equal(true)

        })
        it("Emits a Filled Order Event",async()=>{
            const log =result.logs[0]
             // console.log(log)
                        log.event.should.equal("Trade")
                        const event=log.args
                        event.id.toString().should.equal("1")
                        event.user.toString().should.equal(user1.toString())
                        event.tokenGet.toString().should.equal(token.address.toString())
                        event.tokenGive.toString().should.equal(ETHER_ADDRESS.toString())
                        event.amountGet.toString().should.equal(tokens(1).toString())
                        event.amountGive.toString().should.equal(ether(1).toString())
                        event.userFill.toString().should.equal(user2.toString())
                        event.timestamp.toString().length.should.be.at.least(1,"time is present")
        })  
    })

    describe('failure', () => {

        it('rejects invalid order ids', async() => {
          const invalidOrderId = 99999
          await exchange.fillOrder(invalidOrderId, { from: user2 }).should.be.rejectedWith(EVM_REVERT)
          
        })

        it('rejects already-filled orders',async () => {
          // Fill the order
          await exchange.fillOrder('1', { from: user2 }).should.be.fulfilled
          // Try to fill it again
          await exchange.fillOrder('1', { from: user2 }).should.be.rejectedWith(EVM_REVERT)
        })

        it('rejects cancelled orders',async () => {
          // Cancel the order
          await exchange.cancelOrder('1', { from: user1 }).should.be.fulfilled
          // Try to fill the order
          await exchange.fillOrder('1', { from: user2 }).should.be.rejectedWith(EVM_REVERT)
        })
      }) 

    })
    })
})