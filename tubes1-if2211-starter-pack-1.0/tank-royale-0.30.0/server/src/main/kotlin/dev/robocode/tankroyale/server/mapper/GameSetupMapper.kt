package dev.robocode.tankroyale.server.mapper

import dev.robocode.tankroyale.server.model.GameSetup

object GameSetupMapper {
    fun map(gameSetup: GameSetup): dev.robocode.tankroyale.schema.game.GameSetup {
        gameSetup.apply {
            val setup = dev.robocode.tankroyale.schema.game.GameSetup()
            setup.gameType = gameType
            setup.arenaWidth = arenaWidth
            setup.arenaHeight = arenaHeight
            setup.minNumberOfParticipants = minNumberOfParticipants
            setup.maxNumberOfParticipants = maxNumberOfParticipants
            setup.numberOfRounds = numberOfRounds
            setup.gunCoolingRate = gunCoolingRate
            setup.maxInactivityTurns = maxInactivityTurns
            setup.turnTimeout = turnTimeout
            setup.maxTurnCount = maxTurnCount
            setup.readyTimeout = readyTimeout
            setup.defaultTurnsPerSecond = defaultTurnsPerSecond
            setup.isArenaWidthLocked = isArenaWidthLocked
            setup.isArenaHeightLocked = isArenaHeightLocked
            setup.isMinNumberOfParticipantsLocked = isMinNumberOfParticipantsLocked
            setup.isMaxNumberOfParticipantsLocked = isMaxNumberOfParticipantsLocked
            setup.isNumberOfRoundsLocked = isNumberOfRoundsLocked
            setup.isGunCoolingRateLocked = isGunCoolingRateLocked
            setup.isMaxInactivityTurnsLocked = isMaxInactivityTurnsLocked
            setup.isTurnTimeoutLocked = isTurnTimeoutLocked
            setup.isReadyTimeoutLocked = isReadyTimeoutLocked
            return setup
        }
    }

    fun map(gameSetup: dev.robocode.tankroyale.schema.game.GameSetup): GameSetup {
        gameSetup.apply {
            return GameSetup(
                gameType = gameType,
                arenaWidth = arenaWidth,
                arenaHeight = arenaHeight,
                minNumberOfParticipants = minNumberOfParticipants,
                maxNumberOfParticipants = maxNumberOfParticipants,
                numberOfRounds = numberOfRounds,
                gunCoolingRate = gunCoolingRate,
                maxInactivityTurns = maxInactivityTurns,
                turnTimeout = turnTimeout,
                maxTurnCount = maxTurnCount,
                readyTimeout = readyTimeout,
                defaultTurnsPerSecond = defaultTurnsPerSecond,
                isArenaWidthLocked = isArenaWidthLocked,
                isArenaHeightLocked = isArenaHeightLocked,
                isMinNumberOfParticipantsLocked = isMinNumberOfParticipantsLocked,
                isMaxNumberOfParticipantsLocked = isMaxNumberOfParticipantsLocked,
                isNumberOfRoundsLocked = isNumberOfRoundsLocked,
                isGunCoolingRateLocked = isGunCoolingRateLocked,
                isMaxInactivityTurnsLocked = isMaxInactivityTurnsLocked,
                isTurnTimeoutLocked = isTurnTimeoutLocked,
                isReadyTimeoutLocked = isReadyTimeoutLocked,
            )
        }
    }

    fun map(games: Set<GameSetup>): Set<dev.robocode.tankroyale.schema.game.GameSetup> {
        val mappedGames = mutableSetOf<dev.robocode.tankroyale.schema.game.GameSetup>()
        games.forEach { mappedGames += map(it) }
        return mappedGames
    }
}