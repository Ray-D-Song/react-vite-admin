import '@fullcalendar/react/dist/vdom'
import React, { ReactElement, useState } from 'react'
import FullCalendar, { DateSelectArg, EventApi, EventClickArg, formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import { useTranslation } from 'react-i18next'

let eventGuid = 0

const createEventId = (): string => {
  return String(eventGuid++)
}

const Calendar = (): ReactElement => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([] as EventApi[])
  const { t, i18n } = useTranslation()

  const handleDateSelect = (selectInfo: DateSelectArg): void => {
    const title = prompt(t("Calendar.prompt"))
    const calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title != null) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  const handleEventClick = (clickInfo: EventClickArg): void => {
    if (confirm(`${t("Calendar.confirm")} '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  return (
    <Box m='20px'>
      <Header title={t("Calendar.title")} subtitle={t("Calendar.subtitle")} />

      <Box display='flex' justifyContent='space-between'>
        {/* Calendar Sidebar */}
        <Box
          flex='1 1 20%'
          bgcolor={colors.primary[400]}
          p='15px'
          borderRadius='4px'
        >
          <Typography variant='h5'>Event</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  bgcolor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px'
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {
                      event.start !== null
                        ? formatDate(event.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })
                        : ''
                    }
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar */}
        <Box flex='1 1 100%' ml='15px'>
        <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: '12315',
                title: 'All-day event',
                date: '2022-09-14'
              },
              {
                id: '5123',
                title: 'Timed event',
                date: '2022-09-28'
              }
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar
