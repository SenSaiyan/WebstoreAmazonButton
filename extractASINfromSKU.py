import xlrd

loc = ("C:\Users\djiang\Documents\Amazon Links 2019-11-12.xlsx")

wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)
cheet.cell_value(0,0)

f = open("dictionary.txt","w")

for i in range(sheet.nrows):
    f.write('dict['+sheet.cell_value(i,0)+'] = "' + sheet.cell_value(i,1) + '";' + '\n')

f.close()
