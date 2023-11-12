"use client";

import GitHubCalendar from "react-github-calendar";

export default function CommitGraph() {
	const selectLastHalfYear = (contributions: any[]) => {
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();
		const shownMonths = 12;

		return contributions.filter((activity) => {
			const date = new Date(activity.date);
			const monthOfDay = date.getMonth();

			return (
				date.getFullYear() === currentYear &&
				monthOfDay > currentMonth - shownMonths &&
				monthOfDay <= currentMonth
			);
		});
	};

	return (
		<div className="mt-10">
			<h2 className="text-3xl font-bold">Recent Activities</h2>
			<div className="mt-5">
				<GitHubCalendar
					username="aakashrawat04"
					transformData={selectLastHalfYear}
					hideColorLegend
					hideMonthLabels
					labels={{
						totalCount: "{{count}} contributions in the last year",
					}}
				/>
			</div>
		</div>
	);
}
