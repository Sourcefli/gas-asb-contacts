let Agent;
let Location;
let Mgmt;

function init() {

Sourcefli.initialize(function() {
  Agent = Sourcefli.Table.define({ sheetName: 'Agents' }, {
    fullName: function() {
      return [this["First"]]+ [this["Last"]];
    },
    agentPhone: function (agentName){
//      let agent = Agent.where({ First: agentName });
      let agentIndex = agent.find({agentName});
      return Agent.pluck('Phone')[agentIndex];
    }
  })
 Location = Sourcefli.Table.define({ sheetName: 'Offices' });
 Mgmt = Sourcefli.Table.define({ sheetName: 'Management' });
                                   
  let vegasPhone = Location.pluck('Phone');
  let donPhone = Mgmt.pluck('Phone');
  
  let emails = Agent.pluck('Email');
  Logger.log(emails);
      
      
      
   data = {
    one: vegasPhone,
    two: donPhone,
    three: emails
  }
  
  options = {
    method: 'post',
    payload: data,
  }
  
  UrlFetchApp.fetch('https://encn6j5dpvm5.x.pipedream.net/', options);
      
})
  
}
