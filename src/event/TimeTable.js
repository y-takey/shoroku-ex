import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TimeTable extends Component {
  renderCallendar() {
    const { history } = this.props;

    this.instance = window.jQuery(`#puke`).fullCalendar({
      schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
      defaultView: "agendaDay",
      defaultDate: "2018-03-07",
      titleFormat: "YYYY/MM/DD",
      timeFormat: "hh:mm",
      allDaySlot: false,
      slotLabelFormat: "HH:mm",
      minTime: "08:00:00",
      maxTime: "22:00:00",
      groupByResource: true,
      editable: false,
      selectable: false,
      eventLimit: false,
      header: {
        left: "prev,next today",
        center: "title",
        right: ""
      },
      eventClick: (calEvent, jsEvent, view) => {
        console.log("[eventClick event]", calEvent, jsEvent, view);
        history.push("/");
      },
      events: [
        {
          id: 1,
          resourceId: "a",
          title: "セッション1",
          start: "2018-03-07T09:00:00",
          end: "2018-03-07T11:00:00"
        },
        {
          id: 2,
          resourceId: "b",
          title: "セッション2",
          start: "2018-03-07T12:00:00",
          end: "2018-03-07T14:00:00"
        }
      ],
      resources: [
        { id: "a", title: "[第1会場] 会議センター1F", eventColor: "green" },
        { id: "b", title: "[第2会場] 会議センター2F 201", eventColor: "orange" },
        { id: "c", title: "[第3会場] 会議センター2F 202", eventColor: "red" },
        { id: "d", title: "[第4会場] 会議センター3F" }
      ]
    });
  }
  componentDidMount() {
    this.renderCallendar();
  }

  componentWillReceiveProps(nextProps) {
    window.jQuery(`#puke`).fullCalendar("destroy");
    this.renderCallendar();
  }

  render() {
    return <div id="puke" style={{ padding: 10, maxHeight: "70vh", overflowY: "scroll" }} />;
  }
}

export default withRouter(TimeTable);
