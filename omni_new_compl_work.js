// // Use for setting a value on an Input Field
// input:  #holderVictim\[0\]\.nmatName\.businessName 
// output: document.querySelector("#holderVictim\\[0\\]\\.nmatName\\.businessName").value= value
function setValue(selector, value) {
  if(value === '' || value === ' ' || value === undefined) return '';
  const outStr = selector.split('\\').join('\\\\');
  return `document.querySelector("${outStr}").value=` + `'${value}';`;
}

// Use for setting a value on a Dropdown List or Input box
// input:  #holderVictim\[0\]\.nmatName\.businessName 
// output: document.querySelector("#holderVictim\\[0\\]\\.nmatName\\.businessName").options.selectedIndex = value
function setOption(selector, value) {
  if(value === '' || value === ' ' || value === 'Off' || value === undefined) return '';
  const outStr = selector.split('\\').join('\\\\');
  return `document.querySelector("${outStr}").options.selectedIndex=` + `${value};`
}

// Use for checking a Checkbox
function setCheckbox(selector, value) {
	if(value === '' || value === ' ' || value === 'Off' || value === undefined) return '';
  const outStr = selector.split('\\').join('\\\\');
  return `document.querySelector("${outStr}").checked=` + `${value};`;
}

function setValueEscapeChar(selector, value) {
	if(value === '' || value === ' ' || value === undefined) return '';
	const outStr = selector.split('\\').join('\\\\');
	return `document.querySelector("${outStr}").value=` + `\`${value}\`;`;
  }

function getCounty(county) {
  switch (this.getField(county).value) {
    case '': return '';
      break;
    case 'BRONX': return '1';
      break;
    case 'KINGS': return '2';
      break;
    case 'MANHATTAN': return '3';
      break;
    case 'QUEENS': return '4';
      break;
    case 'RICHMOND': return '5';
      break;
  }
}

function getCity(city) {
  switch (this.getField(city).value) {
    case '': return '';
      break;
    case 'BRONX': return '1';
      break;
    case 'BROOKLYN': return '2';
      break;
    case 'MANHATTAN': return '3';
      break;
    case 'QUEENS': return '4';
      break;
    case 'STATEN ISLAND': return '5';
      break;
  }
}

function SuperVisorOnSceneYes() {
  var isSuperVisorOnScene = this.getField('Supervisor On Scene').value;
  var output = '';
  if (isSuperVisorOnScene === 2 || isSuperVisorOnScene === '') {
    return output;
  }
  else {      // Rank, Name, Command
    output += 
              setOption('#uf61Statistics\\.superOnScene', this.getField('Supervisor On Scene').value) +
              setValue('#uf61Statistics\\.sceneSupvRank', this.getField('sup_on_scene_rank').value) +
              setValue('#uf61Statistics\\.sceneSupvName', this.getField('sup_on_scene_name').value) +
              setValue('#uf61Statistics\\.sceneSupvCmdDsc', this.getField('sup_on_scene_command').value)
    return output;    
  }
}

function VictimIsBusinessOrg() {
    var outStr = '';

    if(this.getField('BUSINESS NAME').value !== '') { 

    // If Business/Organization, list Name
    outStr += setValue("#holderVictim\\[0\\]\\.nmatName\\.businessName", this.getField('BUSINESS NAME').value) +
 
    // Address Location, 1: NYC  2: Other
    setOption("#holderVictim\\[0\\]\\.addrBusAddress\\.resCode", 1) +
  
    /// Victim Business Address
    // Building #
    setValue("#holderVictim\\[0\\]\\.addrBusAddress\\.addressNum", this.getField('BUSINESS ADDR NUMBER').value) +
  
    // Address
    setValue("#holderVictim\\[0\\]\\.addrBusAddress\\.streetName", this.getField('BUSINESS ADDR').value) +
  
    // City
    setValue("#holderVictim\\[0\\]\\.addrBusAddress\\.city", this.getField('BUSINESS CITY').value) +
  
    // State/Country, NEW YORK = 236
    setOption("#holderVictim\\[0\\]\\.addrBusAddress\\.state", 236) +
  
    // Zip
    setValue("#holderVictim\\[0\\]\\.addrBusAddress\\.zip", this.getField('BUSINESS ZIP').value) +
  
    // Room #
    setValue("#holderVictim\\[0\\]\\.addrBusAddress\\.roomNum", this.getField('Room').value) 
  }
  return outStr;
}

function CvInfo() {
  var outStr = '';
  if(this.getField('Victim Type').value === 8) { // if victim is PSNY, remove witness section
    outStr += setOption("#holderVictim\\[0\\]\\.nmatName\\.victimIs", this.getField('Victim Type').value) + 
    `setTimeout(() => { document.querySelector("#witnessRow_0 > table > tbody > tr > td:nth-child(3) > a").click(); }, 2000);`
    return outStr;
  }

  // Victim Type
  outStr += setOption("#holderVictim\\[0\\]\\.nmatName\\.victimIs", this.getField('Victim Type').value) + 

  // Sex
  setOption("#holderVictim\\[0\\]\\.nmatName\\.personSex", this.getField('CV_Sex').value) + 
  
  // Disabled
  setOption("#holderVictim\\[0\\]\\.nmatName\\.disabledFlag", this.getField('Disabled').value) + 

  // Victim is N.Y.C.H.A. Resident
  setOption("#holderVictim\\[0\\]\\.nmatName\\.haResident", this.getField('Resident').value) + 

  // Is Victim fearful for their safety / life
  setOption("#holderVictim\\[0\\]\\.nmatName\\.victimFearful", this.getField('Is Victim Fearful for Their SafetyLife').value) + 

  // Escalating violence / abuse by suspect
  setOption("#holderVictim\\[0\\]\\.nmatName\\.esclatingViolence", this.getField('Escalating ViolenceAbuse by SuspectArrestee').value) + 

  // Were prior DIR's prepared for C/V
  setOption("#holderVictim\\[0\\]\\.nmatName\\.priorDir", this.getField('Were Prior DIRs Prepared for Victim').value) +

  // If Business/Organization name is filled in then run this function
  VictimIsBusinessOrg() +

  // NYPD MOS
  setOption("#holderVictim\\[0\\]\\.nmatName\\.nypdMos", this.getField('Is Victim an NYPD MOS').value) +
  
  // Level Of Injury
  setOption("#holderVictim\\[0\\]\\.nmatName\\.injuryLvl", this.getField('Level Of Injury').value) +

  // Type Of Injury, if none of the checkboxes are selected then return 1: NONE
  setOption("#holderVictim\\[0\\]\\.nmatName\\.injuryType", this.getField('Type Of Injury').value === 'Off' ? 1 : this.getField('Type Of Injury').value) + 

  // Medical Treatment
  setOption("#holderVictim\\[0\\]\\.nmatName\\.medTreat", this.getField('Medical Treatment').value) +

  /////////////////////
  // CV Pegigree Info
  ////////////////////

  // Unknown Last Name
  setCheckbox("#holderVictim\\[0\\]\\.nmatName\\.unknownl", ((this.getField('CV LAST').value === '' || this.getField('CV LAST').value === 'UNK' || 
                                                              this.getField('CV LAST').value === 'UNKNOWN') && this.getField('BUSINESS NAME').value === '')) +
  // If Person, Last Name
  setValue("#holderVictim\\[0\\]\\.nmatName\\.namel", this.getField('CV LAST').value) +
  
  // Unknown First Name
  setCheckbox("#holderVictim\\[0\\]\\.nmatName\\.unknownf", ((this.getField('CV FIRST').value === '' || this.getField('CV FIRST').value === 'UNK' || 
                                                              this.getField('CV LAST').value === 'UNKNOWN') && this.getField('BUSINESS NAME').value === '')) +
  // First Name
  setValue("#holderVictim\\[0\\]\\.nmatName\\.namef", this.getField('CV FIRST').value) +

  // M.I.
  setValue("#holderVictim\\[0\\]\\.nmatName\\.namem", this.getField('CV M').value) +

  // Is this person not Proficient in English?
  setOption("#holderVictim\\[0\\]\\.nmatName\\.interpNeeded", this.getField('group_34').value) +

  // Nickname/Alias/Maiden Name
  setValueEscapeChar("#holderVictim\\[0\\]\\.nmatName\\.akaAlias", this.getField('NicknameAliasMaiden Name').value) +

  // Date of Birth
  setValue("#holderVictim\\[0\\]\\.nmatName\\.dob", this.getField('cv m').valueAsString + '/' + this.getField('cv d').valueAsString + '/' + this.getField('cv y').valueAsString) +
  
  // Race, 5: Unknown race
  setOption("#holderVictim\\[0\\]\\.nmatName\\.race", this.getField('Race').value === 'Off' ? 5 : this.getField('Race').value) +

  /// Permanent Residence Address
  // Address Location
  setOption("#holderVictim\\[0\\]\\.addrPermResAddress\\.resCode", this.getField('CV PermResidence Address Location').value) +

  // Building #
  setValue("#holderVictim\\[0\\]\\.addrPermResAddress\\.addressNum", this.getField('CV ADDRESS NUMBER').value) +

  // Address
  setValue("#holderVictim\\[0\\]\\.addrPermResAddress\\.streetName", this.getField('CV ADDRESS').value) +

  // City
  setValue("#holderVictim\\[0\\]\\.addrPermResAddress\\.city", this.getField('City_2').value) +

  // State Country, NEW YORK = 236
  setOption("#holderVictim\\[0\\]\\.addrPermResAddress\\.state", this.getField('CV PermResidence Address Location').value === 1 ? 236 : '') + 
  
  // Zip
  setValue("#holderVictim\\[0\\]\\.addrPermResAddress\\.zip", this.getField('Zip_2').value) +

  // Apt #
  setValue("#holderVictim\\[0\\]\\.addrPermResAddress\\.aptNum", this.getField('Text14').value) +
  
  // Home Phone #
  setValue("#holderVictim\\[0\\]\\.homePhone\\.phoneNum", this.getField('cv home tel 0').value.toString() + this.getField('cv home tel 1').value + this.getField('cv home tel 2').value) +
  // Not Provided/Unavailable
  setCheckbox("#holderVictim\\[0\\]\\.homePhone\\.provided", this.getField('Not ProvidedUnavailable').value) +

  // Business #
  setValue("#holderVictim\\[0\\]\\.bizPhone\\.phoneNum", this.getField('cv buis tel 0').value.toString() + this.getField('cv buis tel 1').value + this.getField('cv buis tel 2').value) +
  // Not Provided/Unavailable
  setCheckbox("#holderVictim\\[0\\]\\.bizPhone\\.provided", this.getField('Not ProvidedUnavailable_2').value) + 

  // Cell Phone #
  setValue("#holderVictim\\[0\\]\\.cellPhone\\.phoneNum", this.getField('cv cell 0').value.toString() + this.getField('cv cell 1').value + this.getField('cv cell 2').value) +
  // Not Provided/Unavailable
  setCheckbox("#holderVictim\\[0\\]\\.cellPhone\\.provided", this.getField('Not ProvidedUnavailable_3').value) +

  // Email Address
  setValue("#holderVictim\\[0\\]\\.emailAddr\\.name", this.getField('EMail Address').value) +
  // Not Provided/Unavailable
  setCheckbox("#holderVictim\\[0\\]\\.emailAddr\\.provided", this.getField('Not ProvidedUnavailable_4').value) +

  // Suspected Gang Member
  setOption("#holderVictim\\[0\\]\\.nmatName\\.gangAffiliate", this.getField('group_37').value) +

  /// Victim was:
  // Shot
  setOption("#holderVictim\\[0\\]\\.nmatName\\.victimShot", this.getField('Shot').value === 'Off' ? 2 : this.getField('Shot').value) +

  // Stabbed
  setOption("#holderVictim\\[0\\]\\.nmatName\\.stabbed", this.getField('Stabbed').value === 'Off' ? 2 : this.getField('Stabbed').value) +

  // Slashed
  setOption("#holderVictim\\[0\\]\\.nmatName\\.slashed", this.getField('Slashed').value === 'Off' ? 2 : this.getField('Slashed').value) +

  // Actions of Victim Prior to Incident
  //setValueEscapeChar("#holderDetails\\[0\\]\\.details", this.getField('fill_58_2').value) +
  setValueEscapeChar("#holderVictim\\[0\\]\\.holderDetails\\[0\\]\\.details", this.getField('fill_58_2').value) +  // On actual OMNI, this works

  // Victim of Similar Incident 
  setOption("#holderVictim\\[0\\]\\.nmatName\\.victSimIncid", this.getField('EXCEPT SEX OFFENSE').value) +
  // If Yes, When and Where
  setValue("#holderVictim\\[0\\]\\.holderDetails\\[1\\]\\.details", this.getField('If Yes When And Where').value) +

  // Will View Photo
  setOption("#holderVictim\\[0\\]\\.nmatName\\.viewPhoto ", this.getField('Will View Photo').value) +

  // Will Prosecute
  setOption("#holderVictim\\[0\\]\\.nmatName\\.prosecute", this.getField('Will Prosecute').value) +
 
  // Victim/Relative Notified of Crime Victim Comp. Law
  setOption("#uf61Statistics\\.victNotify", this.getField('undefined_26').value)

  return outStr;
}

function ReporterWitnessInfo() {
  var outStr = '';

  // Check and Copy Victim as Reporter / Witness
  if(this.getField('SAA_checkbox').value === 1) { 
    outStr += `document.querySelector("#copyButton_0 > a").click();`
  }
  else {

    // Otherwise add Reporter / Witness
    outStr += `document.querySelector("#witnHeader > a.link").click();` +
    
    // Reporter/Witness
    setOption("#holderWitness\\[0\\]\\.nmatName\\.nameType", this.getField('ReporterWitt').value) +
      
    // If Person, Last Name
    setValue("#holderWitness\\[0\\]\\.nmatName\\.namel", this.getField('WITT LAST').value) +
    
    // First Name
    setValue("#holderWitness\\[0\\]\\.nmatName\\.namef", this.getField('WITT FIRST').value) +
  
    // M.I.
    setValue("#holderWitness\\[0\\]\\.nmatName\\.namem", this.getField('WITT M').value) +
  
    // Is this person not Proficient in English?
    setOption("#holderWitness\\[0\\]\\.nmatName\\.interpNeeded", this.getField('group_47').value) +
  
    // Nickname/Alias/Maiden Name
    setValueEscapeChar("#holderWitness\\[0\\]\\.nmatName\\.akaAlias", this.getField('NicknameAliasMaiden Name_2').value) +
    
    // Sex
    setOption("#holderWitness\\[0\\]\\.nmatName\\.sex", this.getField('RW_Sex').value) +

    // Date of Birth
    setValue("#holderWitness\\[0\\]\\.nmatName\\.dob", this.getField('witt m').valueAsString + '/' + this.getField('witt d').valueAsString + '/' + this.getField('witt y').valueAsString) +
    
    // Race
    setOption("#holderWitness\\[0\\]\\.nmatName\\.race", this.getField('Race_RW').value === 'Off' ? 5 : this.getField('Race_RW').value) +
  
    /// Permanent Residence Address
    // Address Location
    setOption("#holderWitness\\[0\\]\\.addrPermResAddress\\.resCode", this.getField('RW PermResidence Address Location').value) +
  
    // Building #
    setValue("#holderWitness\\[0\\]\\.addrPermResAddress\\.addressNum", this.getField('Witness Address NUMBER').value) +
  
    // Address
    setValue("#holderWitness\\[0\\]\\.addrPermResAddress\\.streetName", this.getField('Witness Address').value) +
  
    // City
    setValue("#holderWitness\\[0\\]\\.addrPermResAddress\\.city", this.getField('City_3').value) +
  
    // State Country, NEW YORK = 236
    setOption("#holderWitness\\[0\\]\\.addrPermResAddress\\.state", this.getField('RW PermResidence Address Location').value === 1 ? 236 : '') +
    
    // Zip
    setValue("#holderWitness\\[0\\]\\.addrPermResAddress\\.zip", this.getField('Zip_3').value) +
  
    // Apt #
    setValue("#holderWitness\\[0\\]\\.addrPermResAddress\\.aptNum", this.getField('Text16').value) +
  
    // Home Phone #
    setValue("#holderWitness\\[0\\]\\.homePhone\\.phoneNum", this.getField('Text26').value.toString() + this.getField('Text20A').value + this.getField('Text20B').value) +
    
    // Business #
    setValue("#holderWitness\\[0\\]\\.bizPhone\\.phoneNum", this.getField('RW Buis tel 0').value.toString() + this.getField('RW Buis tel 1').value + this.getField('RW Buis tel 2').value) +
      
    // Cell Phone #
    setValue("#holderWitness\\[0\\]\\.cellPhone\\.phoneNum", this.getField('Text27').value.toString() + this.getField('Text21A').value + this.getField('Text21B').value) +
    
    // Email Address
    setValue("#holderWitness\\[0\\]\\.emailAddr\\.name", this.getField('EMail Address_2').valueAsString) +
    
    // Suspected Gang Member
    setOption("#holderWitness\\[0\\]\\.nmatName\\.gangAffiliate", this.getField('group_48').value) +
    
    // Position/Relationship to Victim
    setOption("#holderWitness\\[0\\]\\.nmatName\\.posiRelat", this.getField('PositionRelationship To Victim').value)
  }

  return outStr;
}

function VehicleInfo() {
  var veh_str = 
  // Vehicle Involvement
  setOption('#holderVehicle\\[0\\]\\.stolenCrime', this.getField('Vehicle Involvement').value) +

  //Plates Lost Stolen
  setOption('#holderVehicle\\[0\\]\\.plateLstSt', this.getField('Plates Lost Stolen').value) +

  // # of Plates
  setValue('#holderVehicle\\[0\\]\\.numPlates', this.getField('No of Plates').value) +

  // License Plate #
  setValue('#holderVehicle\\[0\\]\\.licenseNum', this.getField('License Plate No').value) +

  // State
  //document.querySelector("#holderVehicle\\[0\\]\\.state").options.selectedIndex = 'NY';

  // Expiration
  setValue('#holderVehicle\\[0\\]\\.expire', this.getField('Expiration').valueAsString) +

  // Vehicle Type
  setOption('#holderVehicle\\[0\\]\\.vehType', this.getField('Vehicle Type').value) +

  // VIN #
  setValue('#holderVehicle\\[0\\]\\.vinNum', this.getField('VIN No').value) +

  // Year
  setValue('#holderVehicle\\[0\\]\\.vehYear', this.getField('Year').value) +

  // Make
  //setOption('#holderVehicle\\[0\\]\\.vehMake', this.getField('Veh_Make_ComboBox').value) +

  // Model
  setValue('#holderVehicle\\[0\\]\\.vehModelOther', this.getField('Model').value) +

  // Style
  setOption('#holderVehicle\\[0\\]\\.vehStyle', this.getField('Veh_Style_ComboBox').value) +

  // Color
  setOption('#holderVehicle\\[0\\]\\.vehColor', this.getField('Veh_Color_ComboBox').value) +

  // Vehicle Value ($)
  setValue('#holderVehicle\\[0\\]\\.vehValue', this.getField('Vehicle Value').value) +

  // Insurance
  setValue('#holderVehicle\\[0\\]\\.insuranceCd', this.getField('Ins Code').value) +

  // Policy #
  setValue('#holderVehicle\\[0\\]\\.policyNum', this.getField('Policy No').valueAsString) +

  // Invoice #
  setValue('#holderVehicle\\[0\\]\\.voucher', this.getField('Invoice No').value) + 

  // Vehicle recovered prior to alarm transmittal
  setOption('#holderVehicle\\[0\\]\\.recovPriorXmit', this.getField('Prior to Alarm Transmittal').value) +

  // Alarm Transmitted
  setOption('#holderVehicle\\[0\\]\\.alarmXmitted', this.getField('Alarm Transmittal').value) +

  // Alarm #
  setValue('#holderVehicle\\[0\\]\\.alarmNum', this.getField('Alarm No').value) + 

  // Time
  setValue('#holderVehicle\\[0\\]\\.alarmTime', this.getField('Time_4').valueAsString) + 

  // Date
  setValue('#holderVehicle\\[0\\]\\.alarmDate', this.getField('Date_4').valueAsString) + 

  // Pct
  setValue('#holderVehicle\\[0\\]\\.alarmPct', this.getField('Alarm Precinct').valueAsString) + 

  // Transmitted by (Rank, Name)
  setValue('#holderVehicle\\[0\\]\\.alarmXmitBy', this.getField('Transmitted By Rank Name').value) + 

  // Vehicle Stolen/ Attempted Stolen From
  setOption('#holderVehicle\\[0\\]\\.vehLocation', this.getField('Vehicle Stolen From').value) +

  // If Other
  setValue('#holderVehicle\\[0\\]\\.vehLocOther', this.getField('Veh If Other').value) + 

  // Vehicle: Damaged Non-Motor Vehicle
  setCheckbox('#holderVehicle\\[0\\]\\.dmgNonmvAcc', this.getField('Damaged NonMotor Vehicle Accident').value) +

  // Vehicle: Damaged Vehicle Accident
  setCheckbox('#holderVehicle\\[0\\]\\.dmgVehAcc', this.getField('Damaged Vehicle Accident').value) +
  
  // Vehicle: Vehicle Parts/Accessories Removed
  setCheckbox('#holderVehicle\\[0\\]\\.vehPartsRem', this.getField('Vehicle PartsAccessories Removed').value) +

  // Vehicle: Property Removed from Vehicle
  setCheckbox('#holderVehicle\\[0\\]\\.vehPropRem', this.getField('Property Removed From Vehicle').value) +

  //Vehicle Held for Forfeiture
  setOption('#holderVehicle\\[0\\]\\.holdForfeit', this.getField('Veh Held For Forfeiture').value) 

  if( this.getField('Year').value === '') {
    return '';
  } else {
    return `setTimeout(() => { document.querySelector("#vehiHeader > a.link").click(); ${veh_str};}, 2000);`
  }
}

function IMEIInfo() {
  var imei_str = 
	
  // IMEI Number
  setValue('#holderDeviceInfo\\[0\\]\\.pedIdNum', this.getField('IMEI Number').value) +
  
  // Confirm IMEI Number
  setValue('#holderDevqiceInfo\\[0\\]\\.conPedIdNum', this.getField('IMEI Number').value) +

  // Stolen / Not Stolen
  //setOption('#holderDeviceInfo\\[0\\]\\.imeiStolen', this.getField('Veh_Style_ComboBox').value) +
  
  // Cell Phone #
  setValue('#holderDeviceInfo\\[0\\]\\.pedTelNum', this.getField('Text51').value) +
  
  // Carrier, 5: Other
  setOption('#holderDeviceInfo\\[0\\]\\.acctCarrier', 5) +

  // Other
  setValue('#holderDeviceInfo\\[0\\]\\.acctCarrierOthr', this.getField('Carrier').value) +

  // Make
  setValue('#holderDeviceInfo\\[0\\]\\.pedMake', this.getField('Make_3').value) +
  
  // Model
  setValue('#holderDeviceInfo\\[0\\]\\.pedModel', this.getField('Model_2').value) +
  
  // Insured
  setOption('#holderDeviceInfo\\[0\\]\\.pedInsured', this.getField('Insured').value) 

  if( this.getField('IMEI Number').value === '') {
    return '';
  } else {
    return `setTimeout(() => { document.querySelector("#deviceInfoHeader > a.link").click(); ${imei_str};}, 2000);`
  }
}


function setProperty(i) {
  var PropInvLetter;
  switch (this.getField(`Property Involvement${i+1}`).value) {
    case '': PropInvLetter = '';
      break;
    case 'C': PropInvLetter = '1';
      break;
    case 'E': PropInvLetter = '2';
      break;
    case 'F': PropInvLetter = '3';
      break;
    case 'B': PropInvLetter = '4';
      break;
    case 'D': PropInvLetter = '6';
      break;
    case 'A': PropInvLetter = '7';
      break;
    case 'G': PropInvLetter = '8';
      break;
    default:  PropInvLetter = '';
  }

  // Property Value: Check for dollar sign in the beginning of string, if found, remove it
  var value_str = this.getField(`Property Value${i+1}`).value;
  if(value_str[0] === '$') value_str = value_str.slice(1); 
  
  var value_recov_str = this.getField(`Value Recovered${i+1}`).value;
  if(value_recov_str[0] === '$') value_recov_str = value_recov_str.slice(1); 

  var property_str = 

  // Property Involvement
  setOption(`#holderProperty\\[${i}\\]\\.propertyInv`, PropInvLetter) +

  // Property Recovered
  setOption(`#holderProperty\\[${i}\\]\\.recovered`, (this.getField(`Recovered${i+1}`).value) === 'Y' ? 1 : 2) +
  
  // Property Category
  setOption(`#holderProperty\\[${i}\\]\\.propertyCat`, this.getField(`Prop_Cat_Combo_Box${i+1}`).value) +
  
  // Property Type

  // Property Use 
  setOption(`#holderProperty\\[${i}\\]\\.busiPers`, this.getField('Property Use').value) +
  
  // Owner Identification #

  // Item #
  setValue(`#holderProperty\\[${i}\\]\\.uf61Counterid`, this.getField(`Item No${i+1}`).value) +
  
  // Quantity
  setValue(`#holderProperty\\[${i}\\]\\.quantity`, this.getField(`Quantity${i+1}`).value) +
  
  // Description
  setValue(`#holderProperty\\[${i}\\]\\.evidence`, this.getField(`Property Desc${i+1}`).value) +
  
  // Serial Number
  // Confirm Serial Number

  // Value ($)
  setValue(`#holderProperty\\[${i}\\]\\.valStolen`, value_str) +

  // Value Recovered ($)
  setValue(`#holderProperty\\[${i}\\]\\.valRecover`, value_recov_str);

  return property_str;
}

function PropertyInfo() {
  var outStr = '';

  if( this.getField('Property Involvement1').value === '') {
    return outStr;
  } else {
    for (var i = 0; i < 26; i++) {
      if(this.getField(`Property Involvement${i+1}`).value === '') {
        break;    
      } else {
        outStr += `setTimeout(() => { document.querySelector("#propHeader > a.link").click(); ${setProperty(i)}; }, 2000);`
      }
    }
  }

  return outStr;
}

this.getField('output1').value =
  // Cmd/PCt Taking Report
  setValue('#uf61Statistics\\.reportPct', this.getField('Command').value) +
  
  // Jurisdiction Of Complaint
  setOption('#uf61Statistics\\.jurisdiction', this.getField('Jurisdiction Of Complaint').value) +

  // ICAD#
  setValue('#uf61Statistics\\.icadNum', this.getField('ICAD No').value) +
  
  //////////////////////////
  // Address of Occurrence
  ////////////////////////

  // Location of Occurrence
  setOption('#addrStatAddress\\.location', this.getField('Check Box53').value) +
  // Address #
  setValue('#addrStatAddress\\.addressNum', this.getField('Text56_address').value) +
  // Street Name
  setValue('#addrStatAddress\\.streetName', this.getField('Text56_street').value) +

  // County
  setOption('#addrStatAddress\\.city', getCounty('Text72')) +
  // Zip
  setValue('#addrStatAddress\\.zip', this.getField('Text58').value) +
  // Apt
  setValue('#addrStatAddress\\.aptNum', this.getField('Text57').value) +

  // Cross Street
  setValue('#addrStatAddress\\.streetCross1', this.getField('Text59').value) +
  setValue('#addrStatAddress\\.streetCross2', this.getField('Text60').value) +

  // Intersection
  setValue('#addrStatAddress\\.streetInter1', this.getField('Text61').value) +
  setValue('#addrStatAddress\\.streetInter2', this.getField('Text62').value) +
  setOption('#addrStatAddress\\.corner', this.getField('Check Box66').value) +

  // Report Time
  setValue('#uf61Statistics\\.rptTime', this.getField('Time').valueAsString) +
  // Report Date
  setValue('#uf61Statistics\\.reportDate', this.getField('Date').valueAsString) +
  /// Occurrence On or From
  // Time
  setValue('#uf61Statistics\\.occFromTime', this.getField('Time_2').valueAsString) +
  // Date
  setValue('#uf61Statistics\\.FromDate', this.getField('Date_2').valueAsString) +
  // Day of Week

  /// Occurrence Through
  // Time
  setValue('#uf61Statistics\\.occToTime', this.getField('Time_3').valueAsString) +
  // Date
  setValue('#uf61Statistics\\.toDate', this.getField('Date_3').valueAsString) +
  // Pct Of Occur
  setValue('#addrStatAddress\\.pct', this.getField('Pct Of Occ').valueAsString) +
  // Aided #
  setValue('#aiatAided\\.aiatNumber', this.getField('AIDED').valueAsString) +
  // Accident #
  setValue('#aiatAccident\\.aiatNumber', this.getField('Accident').valueAsString) +
  // Case Open/Closed
  setOption('#uf61Statistics\\.casestat', 1) +
  setOption('#uf61Statistics\\.clearCode', 1) +

  // Confirmed Shots Fired?
  setOption('#uf61Statistics\\.confirmShotsFired', this.getField('Shots Fired').value) +

  // Possible Hate Crime?
  setOption('#uf61Statistics\\.possHateCrime', this.getField('Possible Hate Crime').value) +
  
  // Was The Victim's Personal Information Taken Or Possessed?
  setOption('#uf61Statistics\\.idTheft1', this.getField('Information Taken Or Possessed').value) +

  // Was The Victim's Personal Information Used To Commit A Crime?
  setOption('#uf61Statistics\\.idTheft2', this.getField('CV Personal Information Used To Commit A Crime').value) +

  // Complaint Received, 1: N/A, 2: Phone, 3: Pick-Up, 4: Radio, 5: Walk-In, 6: Written
  setOption('#uf61Statistics\\.compRecvdBy', this.getField('Comp Received').value) +

  // Visible By Patrol
  setOption('#uf61Statistics\\.visByPatrol', this.getField('Visible By Patrol').value) +

  // Pct. Sector of Occurrence
  setValue('#addrStatAddress\\.sector', this.getField('Sector').value) +

  // Beat of Occurrence
  setValue('#addrStatAddress\\.beat', this.getField('Text4_BoO').value) +
    
  // Post of Occurrence  
  setValue('#addrStatAddress\\.post', this.getField('Text4_P_OO').value) +

  // Prints Requested
  setOption('#uf61Statistics\\.latentPrintPct', this.getField('Prints Requested').value) +

  // SQF
  setOption("#uf61Statistics\\.sqfFlag", this.getField('ArrStopReport').value) +

  // Possibly Gang Related
  setOption("#uf61Statistics\\.gangRelated", this.getField('Possibly').value) +
  
  // Child Abuse Suspected
  setOption("#uf61Statistics\\.childAbuseSusp", this.getField('Suspected').value) + 

  // If Arson Damage Caused By
  setCheckbox("#uf61Statistics\\.fireRelated", this.getField('Building').value) +
  setCheckbox("#uf61Statistics\\.fireRelated", this.getField('Motor Vehicle').value) +
  setCheckbox("#uf61Statistics\\.fireRelated", this.getField('Other Property').value) +
  setCheckbox("#uf61Statistics\\.fireRelated", this.getField('Occupied').value) +
  setCheckbox("#uf61Statistics\\.fireRelated", this.getField('Unoccupied').value) +
  setCheckbox("#uf61Statistics\\.fireRelated", this.getField('Explosion').value) +
  setCheckbox("#uf61Statistics\\.fireRelated", this.getField('Fire').value) +
  setCheckbox("#uf61Statistics\\.fireRelated", this.getField('Unk').value) +

  // DIR Required
  setOption("#uf61Statistics\\.dirRequired", this.getField('group_50').value) + 

  // Child in Common?
  setOption("#uf61Statistics\\.childInCommon", this.getField('Child in Common').value) +   

  // Intimate Relationship?
  setOption("#uf61Statistics\\.intimateRelat", this.getField('Intimate Relationship').value) + 

  // Body Worn Camera
  setOption("#uf61Statistics\\.aoBodyCam", this.getField('Body Worn Camera').value) + 

  ////////////////////////////
  // Location: Premises Type
  //////////////////////////

  // Residential
  setOption("#addrStatAddress\\.premTypeRes", this.getField('Loc_Residential').value) +

  // Public
  setOption("#addrStatAddress\\.premTypePublic", this.getField('Loc_Public').value) +

  // House Of Worship
  setOption("#addrStatAddress\\.premTypeWorship", this.getField('Loc_HOW').value) +

  // Commercial
  setOption("#addrStatAddress\\.premTypeComm", this.getField('Loc_Commercial').value) +
 
  // School
  setOption("#addrStatAddress\\.premTypeSchool", this.getField('Loc_School').value) +
  
  // Other
  setOption("#addrStatAddress\\.premTypeOther", this.getField('Loc_Other').value) +
  
  // Did this offense occur on NYC Parks Dept. Property?
  setOption("#addrStatAddress\\.parksRelated", this.getField('group_46').value) +

  // Indicate Premises Name If Known
  setValue("#addrStatAddress\\.premiseName", this.getField('Indicate Name Of Business').value + this.getField('Indicate Name If Known').value) +
  
  // Exact Location Within Premises Type
  setOption("#addrStatAddress\\.premTypeWithin", this.getField('Loc_ExactLocWithinPrem').value) +

  // Crime Prev. Survey Requested
  setOption("#uf61Statistics\\.crimePrev", this.getField('Requested').value) +
  
  // Supervisor On Scene?
  SuperVisorOnSceneYes() +
  
  // Canvass Conducted
  setOption("#uf61Statistics\\.canvassDone", this.getField('Canvass Conducted').value) + 

  // Was Translator Used?
  setOption("#interpreterUsed", this.getField('Was Translator Used').value) +

  // 61 Narrative
  setValueEscapeChar("#investigationResultsText", this.getField('61 narrative_1').value) +

  // N.Y.C. Dept. Of Ed. School Incident
  setOption("#uf61Statistics\\.ssIncident", this.getField('Incident').value) + 
  
  // Victim ////////////////////////////////////////////////////////////////////
  CvInfo() +

  // Witness / Reporter /////////////////////////////////////////////////////////
  ReporterWitnessInfo() +
 
  // Vehicle ////////////////////////////////////////////////////////////////////
  VehicleInfo() +

  // IMEI ///////////////////////////////////////////////////////////////////////
  IMEIInfo() +

  // Property ///////////////////////////////////////////////////////////////////
  PropertyInfo()+

  // Evidence Collected
  setOption("#uf61Statistics\\.evidenceCollect", this.getField('Evidence Collected').value) +

  // Evidence Collection Team Crime Scene Requested 
  setOption("#uf61Statistics\\.crimeSceneReq", this.getField('ECT Notified').value) +

  // ECT Responded 
  setOption("#uf61Statistics\\.ectResponded", this.getField('ECT Responded').value) +

  // CSU Responded 
  setOption("#uf61Statistics\\.csuResponded", this.getField('CSU Responded').value) +

  /// Reporting Officer
  // Jurisdiction
  setOption("#uf61Statistics\\.rptrAgency", this.getField('Jurisdiction Of Complaint').value) +

  // Tax ID
  setValue("#uf61Statistics\\.strRptrTaxnum", this.getField('Tax Registry No').value) +

  /// Supervising Officer
  // Jurisdiction
  setOption("#uf61Statistics\\.supvAgency", this.getField('Jurisdiction Of Complaint').value) +

  // Tax ID
  setValue("#uf61Statistics\\.strSupvTaxnum", this.getField('Text82').value) 

;



