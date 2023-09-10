import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Check if address is defined before using replace
  const addressText = address ? address.replace(', ', '\n') : '';

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        {addressText && ( // Render only if addressText is defined
          <LogisticsItem icon={AddressIcon}>
            <address>{addressText}</address>
          </LogisticsItem>
        )}
      </ul>
    </section>
  );
}

export default EventLogistics;
