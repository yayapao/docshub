import {
  TableContainer,
  Paper,
  Table,
  Tab,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  styled,
} from '@mui/material'
import { useMemo } from 'react'

type SentryIngestProcessorTableProps = {
  data: {
    columns: Record<string, any>[]
    rows: Record<string, any>[]
  }
  // 是否需要展示 index, 如果为数字则代表起始值
  index?: number
}

export const CommonTable: React.FC<SentryIngestProcessorTableProps> = ({
  data,
  index,
}) => {
  const { columns, rows } = data
  return (
    <StyledTableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {Number.isInteger(index) && (
              <TableCell align="left">{'index'}</TableCell>
            )}
            {columns.map((item) => (
              <TableCell align={item.align || 'left'}>{item.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              {Number.isInteger(index) && (
                <TableCell align="left">{index + idx}</TableCell>
              )}
              {columns.map((item) => {
                return (
                  <TableCell key={item.name} align={item.align}>
                    {row[item.name] || '-'}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

const StyledTableContainer = styled(TableContainer)<any>(() => {
  return {
    marginBottom: '1rem',
    '& table': {
      marginBottom: 0,
    },
    '& .MuiTableCell-root': {
      fontSize: '0.675rem',
    },
  }
})
