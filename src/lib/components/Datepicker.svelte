<label for="dateTransfer">Select Date and Time:</label>
<input
    type="datetime-local"
    id="dateTransfer"
    name="dateTransfer"
    value={transfer.dateTransfer}
    on:change={handleDateChange}
    class="rounded border px-2 py-1"
/>
