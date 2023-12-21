import "./Notifications.css";

const Notification = () => {
	return (
		<div className="Nobara">
			<section className="solo">
				<div className="maki">
					<h1>Notification</h1>
				</div>
			</section>

			<NotificationItem
				title="Payment Receipt"
				description="Receipt from prompt payment"
				time="8:01 AM"
			/>
			<NotificationItem
				title="Payment Receipt"
				description="Receipt from prompt payment"
				time="8:01 AM"
			/>
			<NotificationItem
				title="Payment Receipt"
				description="Receipt from prompt payment"
				time="8:01 AM"
			/>
			<NotificationItem
				title="Payment Receipt"
				description="Receipt from prompt payment"
				time="8:01 AM"
			/>
			<NotificationItem
				title="Payment Receipt"
				description="Receipt from prompt payment"
				time="8:01 AM"
			/>
			<NotificationItem
				title="Payment Receipt"
				description="Receipt from prompt payment"
				time="8:01 AM"
			/>
		</div>
	);
};

const NotificationItem = ({ title, description, time }) => (
	<section className="notification-item">
		<div>
			<img
				src="/assets/icons/Ellipse 513.svg"
				alt="img"
			/>
		</div>
		<h2>{title}</h2>
		<h3>{description}</h3>
		<p>{time}</p>
		<p className="a">{time}</p>
		<p className="b">{time}</p>
		<p className="c">{time}</p>
		<p className="d">{time}</p>
		<p className="e">{time}</p>
	</section>
);

export default Notification;
