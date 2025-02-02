import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const materias = pgTable("Materias",{
    id: serial ("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),

});

export const materiasRelations = relations (materias,({many})=> ({
    userProgress: many(userProgress),
}))

export const userProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(),
    userName: text("user_name").notNull().default("User"),
    userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
    activeMateriaId: integer("active_materia_id").references(()=> materias.id, {onDelete:"cascade"}),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0),
});

export const userProgressRelations = relations(userProgress, ({one})=>({
    activeMateria:one(materias,{
        fields:[userProgress.activeMateriaId],
        references:[materias.id],
    }),
}));