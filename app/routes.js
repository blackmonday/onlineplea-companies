var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// **************
// Find your case
router.post('/map/find-your-case', function (req, res) {
    
    var URN = req.session.data['URN']

    if ((URN == "TFL") || (URN == "tfl") || (URN == "TfL")) {
        req.session.data['charge-title'] = "Passenger failing to produce a ticket"
        req.session.data['charge-detail'] = "On 17 Feb 2017 At Mill Mead Road N17. Being a passenger on a Public service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not as directed by the Driver an Inspector or a Notice displayed on the vehicle pay the fare for the journey in accordance with the direction. Contrary to byelaw 18(1) and 24 of the Railway Byelaws made under Section 219 of the Transport Act 2000 by the Strategic Railway Authority and confirmed under schedule 20 of the Transport Act 2000."
    } else if ((URN == "TVL") || (URN == "tvl")) {
        req.session.data['charge-title'] = "Possess/control TV set with intent another use install without a licence"
        req.session.data['charge-detail'] = "On 01/11/2017 at Chelmsford in the county of Essex were in possession or control of a colour television receiver knowing, or having reasonable grounds for believing, that another person intended to install or use the receiver without a licence";
    } else {
        req.session.data['charge-title'] = "Generic charge title if TFL or TVL not specified as URN"
        req.session.data['charge-detail'] = "Generic charge detail if TFL or TVL not specified as URN"
    }
    
    req.session.data['company-name'] = "The Ivory Peg J D Wetherspoon"
    req.session.data['company-address-line-1'] = "3–7 New London Road"
    req.session.data['company-address-city'] = "Chelmsford"
    req.session.data['company-address-county'] = "Essex"
    req.session.data['company-address-postcode'] = "CM2 0SW"
        
    res.redirect('/map/company-details')
    
})

// ***********
// You details
router.post('/map/company-details', function (req, res) {

    var new_name = req.session.data['new-company-name']
    var new_address_line_1 = req.session.data['new-company-address-line-1']
    var new_address_line_2 = req.session.data['new-company-address-line-2']
    var new_address_city = req.session.data['new-company-address-city']
    var new_address_county = req.session.data['new-company-address-county']
    var new_address_postcode = req.session.data['new-company-address-postcode']
    
    if (new_name != "") {
        req.session.data['company-name'] = new_name
    }
    if (new_address_line_1 != "") {
        req.session.data['company-address-line-1'] = new_address_line_1
    }
    if (new_address_line_2 != "") {
        req.session.data['company-address-line-2'] = new_address_line_2
    }
    if (new_address_city != "") {
        req.session.data['company-address-city'] = new_address_city
    }
    if (new_address_county != "") {
        req.session.data['company-address-county'] = new_address_county
    }
    if (new_address_postcode != "") {
        req.session.data['company-address-postcode'] = new_address_postcode
    }
    
    res.redirect('/map/your-plea')
    
})

// ***********
// Your plea
router.post('/map/your-plea', function (req, res) {

  var plea = req.session.data['how-do-you-plead-group']

  if (plea == "Guilty"){
    res.redirect('/map/guilty-plea')
  } else if (plea == "Not guilty"){
    res.redirect('/map/not-guilty-plea')
  } else {
      res.redirect('/map/your-plea')
  }
    
})

// ***********
// Guilty plea
router.post('/map/guilty-plea', function (req, res) {

  var plea = req.session.data['do-you-want-to-come-to-court-group']

  if (plea == "Yes"){
    res.redirect('/map/your-court-hearing')
  } else if (plea == "No"){
    res.redirect('/map/company-finances')
  } else {
      res.redirect('/map/guilty-plea')
  }
    
})

// ******************
// Your court hearing
router.post('/map/your-court-hearing', function (req, res) {

  var plea = req.session.data['interpreter-group']

  if (plea == "Yes"){
    res.redirect('/map/company-finances')
  } else if (plea == "No"){
    res.redirect('/map/company-finances')
  }
    
})

// ***************
// Not guilty plea
router.post('/map/not-guilty-plea', function (req, res) {

    res.redirect('/map/company-finances')
    
})

// *************
// Your finances
router.post('/map/company-finances', function (req, res) {

    res.redirect('/map/company-income')
    
})

// *************
// Your income
router.post('/map/company-income', function (req, res) {

  res.redirect('/map/check-your-answers')
    
    
})

// ******************
// Check your answers
router.post('/map/check-your-answers', function (req, res) {

    res.redirect('/map/declaration')    
    
})


// ***********
// Declaration
router.post('/map/declaration', function (req, res) {

  res.redirect('/map/confirmation')    
    
})


// ************
// Confirmation
router.post('/map/confirmation', function (req, res) {

  res.redirect('/map/give-feedback')    
    
})

// *************
// Give feedback
router.post('/map/give-feedback', function (req, res) {

  res.redirect('/map/feedback-confirmation')    
    
})

// *********************
// Feedback confirmation
router.post('/map/feedback-confirmation', function (req, res) {

  res.redirect('/map/start-page')    
    
})

