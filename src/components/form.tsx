export function BookingForm() {
  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="i.e. John Doe" />
        </fieldset>

        <fieldset>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" defaultValue="male">
            <option value="male" label="Male"></option>
            <option value="female" label="Female"></option>
            <option value="others" label="Others"></option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="age">Age</label>
          <input id="age" name="age" placeholder="i.e. 24" />
        </fieldset>

        <fieldset>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            placeholder="i.e. 2024-09-01"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="time">Time</label>
          <input id="time" name="time" type="time" placeholder="i.e. 16:00" />
        </fieldset>
      </form>
    </>
  );
}
