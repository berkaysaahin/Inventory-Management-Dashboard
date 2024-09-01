import { ExpenseByCategorySummary } from './../../../client/src/state/api';
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


const prisma = new PrismaClient();

export const getExpensesByCategory = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
            {
                orderBy: {
                    date: 'desc'
                },
            }
        );
        
        const ExpenseByCategorySummary = expenseByCategorySummaryRaw.map(
            (item) => ({
                ...item,
                amount: item.amount.toString(),
            })
        )

        res.json(ExpenseByCategorySummary);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expenses by category'})
    }
}
