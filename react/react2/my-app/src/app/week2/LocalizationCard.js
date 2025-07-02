import { useLanguage } from './languagePart';
import { useState } from 'react';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enUS, tr } from 'date-fns/locale';
import { TextField, Button } from '@mui/material';

const localeMap = {
  en: enUS,
  tr: tr,
};

export default function LocalizationCard() {
  const { language, switchLanguage, translations } = useLanguage();
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="box">
      <h2>{translations[language].greeting}!</h2>
      <Button variant="outlined" onClick={switchLanguage}>
        {translations[language].changeButton}
      </Button>

      <p>
        {translations[language].dateLabel}: {new Date().toLocaleDateString(language)}
      </p>

      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap[language]}>
        <DatePicker
          label={translations[language].dateLabel}
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          renderInput={(params) => <TextField {...params} style={{ marginTop: '1rem' }} />}
        />
      </LocalizationProvider>
    </div>
  );
}
