import TypingText from "@/components/ui/shadcn-io/typing-text"
import { cn } from "@/lib/utils"
import { motion } from 'framer-motion';
const arr = [" designers"," developers"," creatives"," freelancers"]

export const HeroAnimatedText = ({ className } : {
    className?: string;
}) => {
    return(
        <motion.div 
            className={cn(`text-4xl font-bold wrap-break-word justify-center gap-px ${className}`)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <h1 className="inline">
                Perfect for 
            </h1>
            <TypingText
                text={arr}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                // textColors={['#3b82f6', '#8b5cf6', '#06b6d4']}
                variableSpeed={{ min: 50, max: 120 }}
            />
        </motion.div>

)}