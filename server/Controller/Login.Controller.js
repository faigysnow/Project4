let model = require("../modelSchema");
let crypto = require('crypto');

// function to check if user exists in server

function CheckUser(user, callback)




let model = require("../modelSchema");
//let crypto = require('crypto');


// Checks if a user exists in the system
function checkUser(user, callback) {
    let salt = "userApp"

    hashPassword(salt + user.data.password, function(pass) {
        console.log(user.data.name);
        console.log(pass);

        model.User.findOne({
                userName: user.data.name,
                password: pass
            },
            function(err, member) {
                if (err) {
                    callback(404, 'Error Occurred!')
                } else {
                    member !== null ? callback(null, member) : callback('no match');
                }
            });


    });


}

// Creating hash and salt 
function hashPassword(password, callback) {
    let newpass = crypto.createHash('md5').update(password).digest("hex");
    callback(newpass);
}


module.exports.checkUser = checkUser;

// var newMember = new model.Member();
// //model fields:
// newMember._id = 200178755;
// newMember.fname = 'hadar';
// newMember.lname = 'avrahami';
// newMember.userName = 'hadar1234';
// newMember.password = 1234;
// newMember.street = 'baal';
// newMember.city = 'beitar';
// newMember.role = 'client';

// //insert into mongodb:
// newMember.save(function(err, member) {
//     if (err) {
//         res.send('Error saving member!')
//     } else {
//         console.log(member);
//         res.json("the member: " + member);
//     }
// })
