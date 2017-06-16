const sponsorData = [
 {name:"Google",amt:"$50 million"},
 {name:"Apple",amt:"$20 million"},
 {name:"Facebook",amt:"$40 million"},
 {name:"Twitter", amt:"$10 million"},
]

const today = new Date();

Template.sponsors.helpers({
	sponsorData, today
})
