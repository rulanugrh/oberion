type ExperienceItem = {
	type: string
	position: string
	duration: string
}

type Experience = Record<string, ExperienceItem | ExperienceItem[]>

type VolunteerItem = {
	position: string
	duration: string
}

type Volunteer = Record<string, Volunteer | VolunteerItem[]>

const experience: Experience = {
	'Indonetwork': {
		type: "Internship",
		position: "Admin",
		duration: "Feb 2022 - May 2022",
	},
	'Freelancer': {
		type: 'Freelance',
		position: 'Backend Engineer',
		duration: 'Sep 2023 - Present',
	}
}

const volunteer: Volunteer = {
	'Bellshade': [
		{
			position: 'Helper',
			duration: 'Jan 2022 - Mar 2022'
		},
		{
			position: 'Maintainer',
			duration: 'Apr 2022 - Present'
		},
		{
			position: 'Leader',
			duration: 'Jan 2023 - Present'
		}
	]
}